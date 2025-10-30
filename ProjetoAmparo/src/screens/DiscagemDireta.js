import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, ScrollView} from "react-native";

import colors from "../styles/colors";
import {MaterialCommunityIcons, Feather} from '@expo/vector-icons'
import { DrawerActions } from "@react-navigation/native";

export default function DiscagemDireta({navigation}) {

    function callBackScreen() {
        navigation.navigate('HomeScreen')
    }
    return (
      <ScrollView style={styles.scrollView}>
        <View style={styles.container}>

            <View style={styles.header}>
                <TouchableOpacity  style={{marginStart: 20, marginEnd: 20}} onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())}>
                    <MaterialCommunityIcons name="menu" size={30} color = "#A459D1" />
                </TouchableOpacity>
                <Feather name="phone" size={30} color='#A459D1' />
                <Text style={{fontSize: 25,color: colors.primary2, fontWeight: '900', marginStart: 5, textAlign: 'center'}}> Discagem Direta</Text>
            </View>

            <View style={styles.cardAlerta}>
                    <View style={{flexDirection: 'row'}}>
                        <MaterialCommunityIcons name="alert" size={30} color="#f83939ff"/>
                        <Text style={{fontSize: 18, fontWeight: 'bold', color: colors.background}}>Situação de Emergencia</Text>
                    </View>

                    <Text style={{fontSize: 13, textAlign: 'center', color: colors.background, fontWeight: 'bold'}}>
                        Se você está em perigo imediato, use os botões abaixo para ligar diretamente para os serviços de emergência.
                    </Text>

                    <Text style={{fontSize: 14, textAlign: 'center', color: colors.background, fontWeight: 'bold', marginTop: 15}}>
                        Certifique-se de estar em um local seguro antes de fazer a ligação
                    </Text>
            </View>

            <View style={styles.cards1}>
                    <View style={{width: '100%',backgroundColor: '#FF0000', alignItems: 'center', borderTopRightRadius: 9, borderTopLeftRadius: 9}}>
                        <Text style={{fontSize: 18, fontWeight: 'bold', color: colors.background}}> Policia Militar</Text>
                        <Text style={{fontSize: 14, fontWeight: 'bold', color: colors.background}}>Para situações de emergencia e crimes em andamento</Text>
                    </View>

                    <TouchableOpacity>
                        <View style={styles.botoesCard}>
                            <Feather name="phone" size={20} color="#fff"/>
                            <Text style={{fontSize: 14, fontWeight: '800', color: colors.background}}> Ligar 190</Text>
                        </View>
                    </TouchableOpacity>

                    <Text style={{textAlign: 'center', marginTop: 15, fontSize: 14, color: '#000', fontWeight: '400'}}>
                        Toque no botão acima para ligar diretamente para a Policia Militar
                    </Text>
            </View>

            <View style={styles.cards1}>
                    <View style={{width: '100%', backgroundColor: '#FF0000', alignItems: 'center', borderTopRightRadius: 9, borderTopLeftRadius: 9}}>
                        <Text style={{fontSize: 16, fontWeight: 'bold', color: colors.background}}>
                             Central de Atendimento a Mulher
                        </Text>
                        <Text style={{fontSize: 14, fontWeight: 'bold', color: colors.background}}>
                            Orientação e denúncia de violencia contra a mulher
                        </Text>
                    </View>

                    <TouchableOpacity>
                        <View style={styles.botoesCard}>
                            <Feather name="phone" size={20} color="#fff"/>
                            <Text style={{fontSize: 14, fontWeight: '800', color: colors.background}}> Ligar 180</Text>
                        </View>
                    </TouchableOpacity>

                    <Text style={{textAlign: 'center', marginTop: 15, fontSize: 14, color: '#000', fontWeight: '400'}}>
                        Atendimento 24h, gratuito e siligoso para a orientação sobre a violencia
                    </Text>
            </View>

            <View style={styles.cardImportantes}>
                <Text style={{fontSize: 14, color: colors.danger, fontWeight: '900', textAlign: 'center', marginBottom: 10}}> 
                    Outros Contatos Importantes
                </Text>

                <View style={styles.item}>
                    <View style={{flexDirection: 'column'}}>
                         <Text style={{fontWeight: '900', color: '#000', fontSize: 14}}>SAMU - Emergencia Médicas</Text>
                         <Text style={{fontSize: 12}}>Atendimento médico de urgencia</Text>
                    </View>
                    <View style={styles.badge}>
                        <Text style={{ fontSize: 14,fontWeight: "bold",color: "#000"}}>
                           192
                        </Text>
                    </View>
                </View>

                <View style={styles.item}>
                    <View style={{flexDirection: 'column'}}>
                         <Text style={{fontWeight: '900', color: '#000', fontSize: 14}}>Bombeiros</Text>
                         <Text style={{fontSize: 12}}>Emergências e resgates</Text>
                    </View>
                    <View style={styles.badge}>
                        <Text style={{ fontSize: 14,fontWeight: "bold",color: "#000"}}>
                           193
                        </Text>
                    </View>
                </View>

                <View style={styles.item}>
                    <View style={{flexDirection: 'column'}}>
                         <Text style={{fontWeight: '900', color: '#000', fontSize: 14}}>Disque Direitos Humanos</Text>
                         <Text style={{fontSize: 12}}>Denúncias de violações de direitos</Text>
                    </View>
                    <View style={styles.badge}>
                        <Text style={{ fontSize: 14,fontWeight: "bold",color: "#000"}}>
                           100
                        </Text>
                    </View>
                </View>
            </View>

            <View style={styles.cardSeguranca}>
                <View style={{flexDirection: 'row', justifyContent: 'flex-start', justifyContent: 'center'}}>
                    <MaterialCommunityIcons name="lightbulb" size={28} color='#ffd311ff'/>
                    <Text style={styles.titleCardSeuranca}>Dicas de Segurança</Text>
                </View>

                <Text style={styles.textCardSeguranca}>• Mantenha-se em um local seguro durante a ligação</Text>
                <Text style={styles.textCardSeguranca}>• Tenha informações básicas prontas: endereço, situação</Text>
                <Text style={styles.textCardSeguranca}>• Se não puder falar, deixe a ligação aberta</Text>
                <Text style={styles.textCardSeguranca}>• Siga as orientações do atendente</Text>
                <Text style={styles.textCardSeguranca}>• Mantenha o telefone carregado sempre que possivel</Text>
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
    container: {
        alignItems: 'center',   
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
    cardAlerta: {
        width: 360, 
        height: 150, 
        marginTop: 20,
        paddingTop: 10,
        alignItems: 'center',
        borderRadius: 15,
        borderWidth: 0.3,
        borderColor: '#000',
        elevation: 3,
        backgroundColor: '#f86f6aff'
    },
    cards1: {
        width: 360,
        height: 160,
        marginTop: 10,
        alignItems: 'center',
        backgroundColor: colors.background,
        borderRadius: 10,
        borderWidth: 0.3,
        borderColor: '#000',
        elevation: 3
    },
    cardImportantes: {
        width: 'auto', 
        height: 'auto', 
        padding: 10,
        marginTop: 20, 
        marginBottom: 20,
        backgroundColor: colors.background, 
        borderRadius: 10,
        borderWidth: 0.3,
        borderColor: '#000',
        elevation: 3
    },
    item: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        borderWidth: 1,
        borderColor: "#ddd",
        borderRadius: 8,
        padding: 12,
        marginBottom: 8
    },
    badge: {
          backgroundColor: "#f5f5f5",
          borderRadius: 20,
          paddingVertical: 6,
          paddingHorizontal: 14,
    },
    cardSeguranca: {
        width: 360,
        height: 'auto',
        padding: 10,
        flexDirection: 'column',
        borderRadius: 10,
        borderWidth: 0.3,
        borderColor: '#000',
        backgroundColor: '#FFDC7D',
        elevation: 3
    },
    botoesCard: {
        width: 140, 
        height: 45, 
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 15,
        flexDirection: 'row',
        backgroundColor: '#FF0000',
        borderRadius: 10
        
    },
    textHeader: {
        fontSize: 16,
        color: colors.primary2
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
        fontSize: 14,
        fontWeight: '900',
        color: '#c90000ff',
        textAlign: 'left'
    }
})