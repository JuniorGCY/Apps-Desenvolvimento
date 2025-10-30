import React, {useState}from "react";
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Modal, TextInput} from "react-native";
import {MaterialCommunityIcons} from '@expo/vector-icons'
import { DrawerActions } from "@react-navigation/native";
import colors from "../styles/colors";

import ModalContentPsi1 from './ModalContentPsi1'
import ModalContentPsi2 from './ModalContentPsi2'
import ModalContentPsi3 from './ModalContentPsi3'

export default function ApoioPsicoloico({navigation}) {
    const [selectedContent, setSelecedContent] = useState(null)
    const [visibleModal, setVisibleModal] = useState(false)

    const handleModal = (content) => {
        setVisibleModal(true),
        setSelecedContent(content)
    }

    const renderModal = () => {
        switch (selectedContent) {
            case 'Content1':
                return <ModalContentPsi1 />
            case 'Content2':
                return <ModalContentPsi2 />
            case 'Content3':
                return <ModalContentPsi3 />
            default:
                return null;
        }
    }
    return (
        <ScrollView style={styles.scrollView}>
             <View style={styles.header}>
                <TouchableOpacity style={{marginStart: 20, marginEnd: 20}} onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())}>
                    <MaterialCommunityIcons name="menu" size={30} color='#AF28FF' />
                </TouchableOpacity>
                        
                <MaterialCommunityIcons name="heart" size={30} color='#AF28FF'/>
                <Text style={{fontSize: 25,color: colors.primary, fontWeight: 'bold', marginStart: 15, textAlign: 'center'}}>Apoio Psicológico</Text>
            </View>

            <View style={styles.cardPesquisa}>
                <Text style={{fontWeight: '900'}}>Encontre Apoio Psicológico</Text>
                <TextInput 
                  placeholder="Buscar por serviços de apoio psicologico gratuitos e acessiveis em sua região"
                  style={{borderWidth: 0.5, borderColor: '#000', borderRadius: 10}}/>
            </View>

            <Text style={{fontWeight: '900', fontSize: 16, marginTop: 30, marginStart: 20, alignItems: 'flex-start'}}>Apoio Profissional</Text>

            <ScrollView horizontal style={{marginStart: 10}} showsHorizontalScrollIndicator={false}>
                <View style={styles.cardSuporteProfissional}>
                    <ScrollView nestedScrollEnabled={true} >
                    <Text style={{fontWeight: '500', fontSize: 16, marginTop: 5}}>Centro de Valorização da Vida (CVV)</Text>
                    <Text style={{fontWeight: '400', fontSize: 16, marginTop: 5, marginBottom: 10}}>Apoio emocional e prevenção do suicidio. Atendimento voluntário e gratuito</Text>


                    <View style={{flexDirection: 'row'}}>
                        <MaterialCommunityIcons name="phone" size={20} color='#252525ff'/>
                        <Text style={{marginStart: 10, marginBottom: 5}}>188</Text>
                    </View>

                    <View style={{flexDirection: 'row'}}>
                        <MaterialCommunityIcons name="clock-alert-outline" size={20} color='#000'/>
                        <Text style={{marginStart: 10, marginBottom: 10}}>24 horas</Text>
                    </View>
                    
                    <Text style={{fontWeight: '400', fontSize: 16, marginBottom: 10}}>Serviços oferecidos:</Text>

                    <View style={{flexDirection: 'row'}}>
                        <MaterialCommunityIcons name="check-circle-outline" size={20} color='#00ff15ff'/>
                        <Text style={{marginStart: 10, marginBottom: 10}}>Chat Online 7 dias</Text>
                    </View>

                    <View style={{flexDirection: 'row'}}>
                        <MaterialCommunityIcons name="check-circle-outline" size={20} color='#00ff15ff'/>
                        <Text style={{marginStart: 10, marginBottom: 10}}>Ligação 24 horas</Text>
                    </View>

                    <View style={{flexDirection: 'row'}}>
                        <MaterialCommunityIcons name="check-circle-outline" size={20} color='#00ff15ff'/>
                        <Text style={{marginStart: 10, marginBottom: 10}}>Atendimento online e presencial</Text>
                    </View>
                    
                    <Text style={{backgroundColor: '#5fff59ff', color: '#000', fontWeight: '400', width: 140}}>Atendimento Gratuito</Text>

                    <View style={{width: '100%',height: 1, backgroundColor: '#a3a3a3ff', marginTop: 10, marginBottom: 10}}></View>
                    <View style={{flexDirection: 'row'}}>
                        <MaterialCommunityIcons name="phone" size={20} color='#FF0000'/>
                        <Text style={{fontWeight: '500', color: '#FF0000', marginStart: 10}}>Ligar para agendar</Text>
                    </View>
                    </ScrollView>
                </View>
                
                <View style={styles.cardSuporteProfissional}>
                    <ScrollView nestedScrollEnabled={true} >
                    <Text style={{fontWeight: '500', fontSize: 16, marginTop: 5}}>Terapia Online - Zenklub</Text>
                    <Text style={{fontWeight: '400', fontSize: 16, marginTop: 5, marginBottom: 10}}>Plataforma de terapia online com psicólogos certificados.</Text>

                    <View style={{flexDirection: 'row'}}>
                        <MaterialCommunityIcons name="location-exit" size={20} color='#000'/>
                        <Text style={{marginStart: 10, marginBottom: 5}}>Online: App Zenklub</Text>
                    </View>

                    <View style={{flexDirection: 'row'}}>
                        <MaterialCommunityIcons name="clock-alert-outline" size={20} color='#000'/>
                        <Text style={{marginStart: 10, marginBottom: 10}}>Conforme agendamento</Text>
                    </View>
                    
                    <Text style={{fontWeight: '400', fontSize: 16, marginBottom: 10}}>Serviços oferecidos:</Text>

                    <View style={{flexDirection: 'row'}}>
                        <MaterialCommunityIcons name="check-circle-outline" size={20} color='#00ff15ff'/>
                        <Text style={{marginStart: 10, marginBottom: 10}}>Sessões individuais</Text>
                    </View>

                    <View style={{flexDirection: 'row'}}>
                        <MaterialCommunityIcons name="check-circle-outline" size={20} color='#00ff15ff'/>
                        <Text style={{marginStart: 10, marginBottom: 10}}>Psicologia/Psicanálise/Terapia/Nutrição</Text>
                    </View>

                    <View style={{flexDirection: 'row'}}>
                        <MaterialCommunityIcons name="check-circle-outline" size={20} color='#00ff15ff'/>
                        <Text style={{marginStart: 10, marginBottom: 10}}>Atendimento online</Text>
                    </View>
                    
                    <Text style={{backgroundColor: '#5fff59ff', color: '#000', fontWeight: '400', width: 140}}>Atendimento Pago</Text>

                    <View style={{width: '100%',height: 1, backgroundColor: '#a3a3a3ff', marginTop: 10, marginBottom: 10}}></View>
                    <View style={{flexDirection: 'row'}}>
                        <MaterialCommunityIcons name="clipboard-check" size={20} color='#FF0000'/>
                        <Text style={{fontWeight: '500', color: '#FF0000', marginStart: 10}}>Acessar Site</Text>
                    </View>
                    </ScrollView>
                </View>

                <View style={styles.cardSuporteProfissional}>
                    <ScrollView nestedScrollEnabled={true} >
                    <Text style={{fontWeight: '500', fontSize: 16, marginTop: 5}}>Núcleo de Psicologia da Universidade</Text>
                    <Text style={{fontWeight: '400', fontSize: 16, marginTop: 5, marginBottom: 10}}>Serviço de psicologia comunitária com foco em situações de violência e trauma.</Text>

                    <View style={{flexDirection: 'row'}}>
                        <MaterialCommunityIcons name="location-exit" size={20} color='#000'/>
                        <Text style={{marginStart: 10, marginBottom: 5}}>Rua das Flores, 500 - São Paulo/SP</Text>
                    </View>

                    <View style={{flexDirection: 'row'}}>
                        <MaterialCommunityIcons name="phone" size={20} color='#252525ff'/>
                        <Text style={{marginStart: 10, marginBottom: 5}}>(11) 2222-3333</Text>
                    </View>

                    <View style={{flexDirection: 'row'}}>
                        <MaterialCommunityIcons name="clock-alert-outline" size={20} color='#000'/>
                        <Text style={{marginStart: 10, marginBottom: 10}}>Segunda a sexta, 9h às 17h</Text>
                    </View>
                    
                    <Text style={{fontWeight: '400', fontSize: 16, marginBottom: 10}}>Serviços oferecidos:</Text>

                    <View style={{flexDirection: 'row'}}>
                        <MaterialCommunityIcons name="check-circle-outline" size={20} color='#00ff15ff'/>
                        <Text style={{marginStart: 10, marginBottom: 10}}>Atendimento psicológico gratuito</Text>
                    </View>

                    <View style={{flexDirection: 'row'}}>
                        <MaterialCommunityIcons name="check-circle-outline" size={20} color='#00ff15ff'/>
                        <Text style={{marginStart: 10, marginBottom: 10}}>Orientação familiar</Text>
                    </View>

                    <View style={{flexDirection: 'row'}}>
                        <MaterialCommunityIcons name="check-circle-outline" size={20} color='#00ff15ff'/>
                        <Text style={{marginStart: 10, marginBottom: 10}}>Grupos terapêuticos</Text>
                    </View>
                    
                    <Text style={{backgroundColor: '#5fff59ff', color: '#000', fontWeight: '400', width: 140}}>Atendimento Gratuito</Text>

                    <View style={{width: '100%',height: 1, backgroundColor: '#a3a3a3ff', marginTop: 10, marginBottom: 10}}></View>
                    <View style={{flexDirection: 'row'}}>
                        <MaterialCommunityIcons name="phone" size={20} color='#FF0000'/>
                        <Text style={{fontWeight: '500', color: '#FF0000', marginStart: 10}}>Ligar para agendar</Text>
                    </View>
                    </ScrollView>
                </View>

                <View style={styles.cardSuporteProfissional}>
                    <ScrollView nestedScrollEnabled={true} >
                    <Text style={{fontWeight: '500', fontSize: 16, marginTop: 5}}>Casa da Mulher Brasileira</Text>
                    <Text style={{fontWeight: '400', fontSize: 16, marginTop: 5, marginBottom: 10}}>Atendimento psicológico especializado para mulheres em situação de violência.</Text>

                    <View style={{flexDirection: 'row'}}>
                        <MaterialCommunityIcons name="location-exit" size={20} color='#000'/>
                        <Text style={{marginStart: 10, marginBottom: 5}}>Capitais e grandes cidades</Text>
                    </View>

                    <View style={{flexDirection: 'row'}}>
                        <MaterialCommunityIcons name="phone" size={20} color='#252525ff'/>
                        <Text style={{marginStart: 10, marginBottom: 5}}>Presencial: 180</Text>
                    </View>

                    <View style={{flexDirection: 'row'}}>
                        <MaterialCommunityIcons name="clock-alert-outline" size={20} color='#000'/>
                        <Text style={{marginStart: 10, marginBottom: 10}}>24 horas</Text>
                    </View>
                    
                    <Text style={{fontWeight: '400', fontSize: 16, marginBottom: 10}}>Serviços oferecidos:</Text>

                    <View style={{flexDirection: 'row'}}>
                        <MaterialCommunityIcons name="check-circle-outline" size={20} color='#00ff15ff'/>
                        <Text style={{marginStart: 10, marginBottom: 10}}>Atendimento psicológico gratuito</Text>
                    </View>

                    <View style={{flexDirection: 'row'}}>
                        <MaterialCommunityIcons name="check-circle-outline" size={20} color='#00ff15ff'/>
                        <Text style={{marginStart: 10, marginBottom: 10}}>Orientação familiar</Text>
                    </View>

                    <View style={{flexDirection: 'row'}}>
                        <MaterialCommunityIcons name="check-circle-outline" size={20} color='#00ff15ff'/>
                        <Text style={{marginStart: 10, marginBottom: 10}}>Grupos terapêuticos</Text>
                    </View>
                    
                    <Text style={{backgroundColor: '#5fff59ff', color: '#000', fontWeight: '400', width: 140}}>Atendimento Gratuito</Text>

                    <View style={{width: '100%',height: 1, backgroundColor: '#a3a3a3ff', marginTop: 10, marginBottom: 10}}></View>
                    <View style={{flexDirection: 'row'}}>
                        <MaterialCommunityIcons name="clipboard-check" size={20} color='#FF0000'/>
                        <Text style={{fontWeight: '500', color: '#FF0000', marginStart: 10}}>Acessar site</Text>
                    </View>
                    </ScrollView>
                </View>
            </ScrollView>

            <View style={styles.cardExercicios}>
                <Text style={{fontSize: 14, color: '#ff3030ff', fontWeight: '900', margin: 10}}>Exercícios de Autocuidado</Text>

                <View style={{width: '100%', height: 1, backgroundColor: '#d3d3d3ff', marginBottom: 10}}></View>

                <TouchableOpacity onPress={ () => handleModal('Content1')}>
                    <View style={styles.cardLite}>
                    <Text style={{color: '#ff3030ff', fontWeight: '900', fontSize: 14}}>Respiração para Redução de Ansiedade</Text>
                    <Text style={{fontSize: 12}}>Exercícios de Respiração profunda para acalmar o sistema nervoso em mom...</Text>

                    <View style={{flexDirection: 'row', marginTop: 10}}>
                        <MaterialCommunityIcons name="clock" size={20} color='#000'/>
                        <Text style={{marginStart: 10}}>5 Minutos</Text>
                    </View>
                </View>
                </TouchableOpacity>
                
                <View style={{width: '100%', height: 1, backgroundColor: '#d3d3d3ff', marginBottom: 10}}></View>

                <TouchableOpacity onPress={ () => handleModal('Content2')}>
                    <View style={styles.cardLite}>
                    <Text style={{color: '#ff3030ff', fontWeight: '900', fontSize: 14}}>Escaneamento Corporal para Redução de Estresse</Text>
                    <Text style={{fontSize: 12}}>Técnica de atenção plena para reconectar com o corpo e reduzir tensões...</Text>

                    <View style={{flexDirection: 'row', marginTop: 10}}>
                        <MaterialCommunityIcons name="clock" size={20} color='#000'/>
                        <Text style={{marginStart: 10}}>10-15 Minutos</Text>
                    </View>
                </View>
                </TouchableOpacity>
                
                <View style={{width: '100%', height: 1, backgroundColor: '#d3d3d3ff', marginBottom: 10}}></View>

                <TouchableOpacity onPress={() => handleModal('Content3')}>
                    <View style={styles.cardLite}>
                    <Text style={{color: '#ff3030ff', fontWeight: '900', fontSize: 14}}>Diário de Gratidão</Text>
                    <Text style={{fontSize: 12}}>Prática de registro diário para reconhecer aspectos positivos mesmo em...</Text>

                    <View style={{flexDirection: 'row', marginTop: 10}}>
                        <MaterialCommunityIcons name="clock" size={20} color='#000'/>
                        <Text style={{marginStart: 10}}>5 Minutos</Text>
                    </View>
                </View>
                </TouchableOpacity>

                <Modal 
                  visible={visibleModal}
                  animationType="slide"
                  onRequestClose={ () => setVisibleModal(false)}
                  transparent={false}>

                    <ScrollView>
                        <View>
                            {renderModal()}
                        </View>
                    </ScrollView>
                </Modal>
                
            </View>

            <ScrollView  style={styles.cardAutoCuidado}>
                <View style={{flexDirection: 'column'}}>
                    <View style={{flexDirection: 'row', justifyContent: 'center'}}>
                        <Text style={{color: '#fff', fontSize: 15, fontWeight: '900', margin: 10}}>Cuide da Sua Saúde Mental</Text>
                    </View>

                    <View style={{flexDirection: 'row', alignItems: 'center'}}>
                        <MaterialCommunityIcons name="check" size={20} color='#fff'/>
                        <Text style={{color: '#fff', fontSize: 15, fontWeight: '900', margin: 10}}>Redução de sintomas de ansiedade e estresse</Text>
                    </View>

                    <View style={{flexDirection: 'row', alignItems: 'center'}}>
                        <MaterialCommunityIcons name="check" size={20} color='#fff'/>
                        <Text style={{color: '#fff', fontSize: 15, fontWeight: '900', margin: 10}}>Maior clareza para tomar decisões</Text>
                    </View>

                    <View style={{flexDirection: 'row', alignItems: 'center'}}>
                        <MaterialCommunityIcons name="check" size={20} color='#fff'/>
                        <Text style={{color: '#fff', fontSize: 15, fontWeight: '900', margin: 10}}>Fortalecimento da autoestima</Text>
                    </View>

                    <View style={{flexDirection: 'row', alignItems: 'center'}}>
                        <MaterialCommunityIcons name="check" size={20} color='#fff'/>
                        <Text style={{color: '#fff', fontSize: 15, fontWeight: '900', margin: 10}}>Reconexão com seus valores e necessidades</Text>
                    </View>

                    <View style={{flexDirection: 'row', alignItems: 'center'}}>
                        <MaterialCommunityIcons name="check" size={20} color='#fff'/>
                        <Text style={{color: '#fff', fontSize: 15, fontWeight: '900', margin: 10}}>Mantenha uma rotina de sono regular</Text>
                    </View>

                    <View style={{flexDirection: 'row', alignItems: 'center'}}>
                        <MaterialCommunityIcons name="check" size={20} color='#fff'/>
                        <Text style={{color: '#fff', fontSize: 15, fontWeight: '900', margin: 10}}>• Evite isolamento social</Text>
                    </View>
                </View>
            </ScrollView>

            
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
    cardPesquisa: {
        width: 390, 
        height: 'auto', 
        padding: 10,
        marginTop: 10,
        alignSelf: 'center',
        borderRadius: 10,
        backgroundColor: '#fff',
        borderRadius: 10,
        borderWidth: 0.5,
        borderColor: '#000',
        elevation: 3
    },
    cardAutoCuidado: {
        width: 'auto',
        height: 'auto',
        marginTop: 20,
        paddingLeft: 20,
        alignSelf: 'center',
        backgroundColor: '#f827ffff',
        borderRadius: 20,
        borderWidth: 0.5,
        borderColor: '#000',
        elevation: 3
    },
    cardSuporteProfissional: {
        width: 370,
        height: 220,
        marginTop: 10,
        marginEnd: 10,
        padding: 20,
        alignSelf: 'center',
        backgroundColor: '#fff',
        borderRadius: 20,
        borderWidth: 0.5,
        borderColor: '#000',
        elevation: 3
    },
    cardLite: {
        width: 'auto', 
        height: 'auto',
        paddingStart: 10,
        marginBottom: 10,
        backgroundColor: '#fff', 
        flexDirection: 'column', 
        borderRadius: 8
    },
    cardExercicios: {
        width: 370,
        height: 'auto',
        marginTop: 20,
        alignSelf: 'center',
        backgroundColor: '#fff',
        borderRadius: 20,
        borderWidth: 0.5,
        borderColor: '#000000ff',
        elevation: 3
    }

})