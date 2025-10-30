import React, {useState} from "react";
import { ScrollView } from "react-native";
import { View, Text, StyleSheet, TouchableOpacity, TextInput} from "react-native";
import {MaterialCommunityIcons,  Feather} from '@expo/vector-icons'
import colors from "../styles/colors";

import CheckBox from "@react-native-community/checkbox";
import { DrawerActions } from "@react-navigation/native";

export default function ManualDeFuga({navigation}) {

    const [selectedOptions, setSelectedOptions] = useState({
        RG_CPF: false,
        Carteira_de_Trabalho: false,
        Comprovante_de_Residencia: false,
        MedicamentosEssenciais: false,
        Cartões_Bancários : false,
        CertificadodeNascimento: false,
        ComprovantedeRenda: false,
        CartõesDoSUS: false,
        ChavesExtras: false,
        DocumentosDosFilhos: false
    })

    const [selectedOptions2, setSelectedOptions2] = useState({
        Informarpessoadeconfiançasobreoplano: false,
        Guardardinheiroemlocalseguro: false,
        Identificarrotasdefuga: false,
        Documentarevidênciasdeviolência : false,
        Prepararbolsascomitensessenciais: false,
        Memorizarnúmerosdeemergência : false,
        Prepararosfilhosetiver: false,
        Buscarorientacaojurídicaprévia: false
    })

    const labels = {
        RG_CPF: "RG/CPF",
        Carteira_de_Trabalho: "Carteira de Trabalho",
        Comprovante_de_Residencia: "Comprovante de Residência",
        MedicamentosEssenciais: "Medicamentos Essenciais",
        Cartões_Bancários : "Cartões Bancários",
        CertificadodeNascimento: "Certificado de Nascimento (Própria e dos filhos)",
        ComprovantedeRenda: "Comprovante de Renda",
        CartõesDoSUS: "Cartões do SUS",
        ChavesExtras: "Chaves Extras",
        DocumentosDosFilhos: "Documentos Dos Filhos (Escola, Saúde)",
        Informarpessoadeconfiançasobreoplano: "Informar pessoa de confiança sobre o plano",
        Guardardinheiroemlocalseguro: "Guardar dinheiro em local seguro",
        Identificarrotasdefuga: "Identificar rotas de fuga",
        Documentarevidênciasdeviolência : "Documentar evidências de violência ",
        Prepararbolsascomitensessenciais: "Preparar bolsas com itens essenciais",
        Memorizarnúmerosdeemergência : "Memorizar números de emergência",
        Prepararosfilhosetiver: "Preparar os filhos (se tiver)",
        Buscarorientacaojurídicaprévia: "Buscar orientação jurídica prévia"
    }

    const handleToggle = (key) => {
        setSelectedOptions({...selectedOptions, [key]: !selectedOptions[key]})
    }
    return (
      <ScrollView style={styles.scrollView}>

            <View style={styles.header}>
                <TouchableOpacity style={{marginStart: 20, marginEnd: 20}} onPress={ () => navigation.dispatch(DrawerActions.toggleDrawer())}>
                    <MaterialCommunityIcons name="menu" size={30}  color='#A459D1'/>
                </TouchableOpacity>

                <MaterialCommunityIcons name="shield" size={30} color='#A459D1'/>
                <Text style={{fontSize: 25,color: colors.primary, fontWeight: 'bold', marginStart: 5, textAlign: 'center'}}> Manual de Fuga</Text>
            </View>

            <View style={styles.body}>

                <View style={styles.mainCard}>
                    <Text style={{fontSize: 14,fontWeight: 'bold', textAlign: 'center', color: colors.primary}}>Plano de Segurança Pessoal</Text>
                    <Text style={{fontSize: 12,fontWeight: 'bold', textAlign: 'center', color: colors.primary,marginBottom: 10}}>Preencha as informações abaixo para criar seu plano de saída segura</Text>

                    <Text style={styles.textCard}>Descreva brevemente sua situação atual:</Text>
                    <TextInput 
                      style={styles.TextInput}
                      placeholder="Descreva sua situação do seu jeito confortável "/>

                    <Text style={styles.textCard}>Local seguro para onde deseja ir:</Text>
                    <TextInput 
                      style={styles.TextInput}
                      placeholder="Casa de familiar, amigo, abrigo etc. "/>

                    <Text style={styles.textCard}>Contatos de confiança:</Text>
                    <TextInput 
                      style={styles.TextInput}
                      placeholder="Nome e telefones das pessoas que podem ajudar."/>

                    <Text style={styles.textCard}>Documentos importantes para Levar</Text>
                    {Object.keys(selectedOptions).map((key, index) => (
                        <View key={index} style={styles.checkBox}>
                            <CheckBox 
                              value={selectedOptions[key]}
                              onValueChange={ () => handleToggle(key)}
                              tintColors={{true: '#4CAF50', false: '#000'}}/>
                            <Text style={{fontWeight: '500'}}>{labels[key]}</Text>
                        </View>
                    ))}

                   <Text style={styles.textCard}>Recursos Financeiros Disponíveis</Text>
                   <TextInput 
                      style={styles.TextInput}
                      placeholder="Dinheiro guardado, contas bancárias"/>
                    <Text style={styles.textCard}>Medidas de segurança a tomar</Text>

                     {Object.keys(selectedOptions2).map((key, index) => (
                        <View key={index} style={styles.checkBox}>
                            <CheckBox 
                              value={selectedOptions2[key]}
                              onValueChange={ () => handleToggle(key)}
                              tintColors={{true: '#4CAF50', false: '#000'}}/>
                            <Text style={{fontWeight: '500'}}>{labels[key]}</Text>
                        </View>
                    ))}

                    <Text style={styles.textCard}>Planejamento Detalhado da saida: </Text>
                    <TextInput 
                      style={styles.TextInput}
                      placeholder="Descreva quando e como pretende sair. Horários, transporte.."/>
                      
                    <Text style={styles.textCard}>Observações Adicionais: </Text>
                    <TextInput 
                      style={styles.TextInput}
                      placeholder="Outras informações importantes para seu plano"/>

                    <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                        <TouchableOpacity>
                          <View style={styles.buttonCard}>
                              <Feather name="share-2" size={20} color='#fff'/>
                              <Text style={{fontSize: 10, fontWeight: 'bold', color: colors.background}}>Compartilhar Plano Seguro</Text>
                          </View>
                        </TouchableOpacity>

                        <TouchableOpacity>
                          <View style={styles.buttonCard}>
                             <Feather name="download" size={20} color='#fff'/>
                             <Text style={{fontSize: 10, fontWeight: 'bold', color: colors.background}}>Salvar como PDF</Text>
                          </View>
                        </TouchableOpacity>

                    </View>

                    <View style={styles.cardSeguranca}>
                        <View  style={{flexDirection: 'row', justifyContent: 'center'}}>
                            <MaterialCommunityIcons name="alert" size={30} color="#FF4B4B"/>
                            <Text style={styles.titleCardSeuranca}>Importante para sua segurança</Text>
                        </View>

                        <Text style={styles.textCardSeguranca}>• Mantenha este plano em local seguro e sigiloso</Text>
                        <Text style={styles.textCardSeguranca}>• Compartilhe apenas com pessoas de extrema confiança</Text>
                        <Text style={styles.textCardSeguranca}>• Atualize o plano sempre que necessário</Text>
                        <Text style={styles.textCardSeguranca}>• Em emergência, ligue 190 (Polícia) ou 180 (Central da Mulher)</Text>
                        <Text style={styles.textCardSeguranca}>• Procure sempre orientação profissional especializada</Text>
                    </View>

                </View>

            </View>
                
      </ScrollView>
    )
}

const styles = StyleSheet.create({
    scrollView: {
        flex: 1,
        backgroundColor: '#FFEDF9'
    },
    header: {
        width: '100%',
        height: 100,
        paddingStart: 5,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
        backgroundColor: colors.background,
        borderBottomLeftRadius: 50,
        borderWidth: 0.3,
        borderColor: '#000',
        elevation: 3
    },
    body: {
        width: 390,
        height: 'auto',
        marginTop: 30,
        marginHorizontal: 10,
        padding: 10,
        alignItems: 'center',
        backgroundColor: colors.background,
        borderRadius: 20,
        borderWidth: 0.5,
        borderColor: colors.primary,
        elevation: 3
    },
    mainCard: {

    },
    checkBox: {
        flexDirection: 'row'
    },
    cardSeguranca: {
        width: 350,
        height: 'auto',
        padding: 10,
        marginTop: 20,
        borderRadius: 15,
        backgroundColor: '#FFDC7D',
    },
    buttonCard: {
        width: 180,
        height: 45,
        marginTop: 15,
        flexDirection: 'row',
        borderRadius:  20,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: colors.primary
    },
    TextInput: {
        width: 350,
        height: 40,
        marginBottom: 10,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#000'
    },
    textCard: {
        fontSize: 14,
        fontWeight: 'bold',
        marginTop: 10,
        marginBottom: 5
    },
     titleCardSeuranca: {
        textAlign: 'center',
        fontWeight: '900',
        fontSize: 16,
        color: '#c90000ff'
    },
    textCardSeguranca: {
        marginTop: 5,
        marginBottom: 5,
        fontSize: 13,
        fontWeight: '900',
        color: '#c90000ff',
        textAlign: 'left'
    }
    })