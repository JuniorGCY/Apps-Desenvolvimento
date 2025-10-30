import React from "react";
import { View, Text, Button, StyleSheet, ScrollView, TouchableOpacity, Image} from "react-native";
import {MaterialCommunityIcons, Feather, FontAwesome} from '@expo/vector-icons'

import colors from "../styles/colors";
import typography from "../styles/typography";
import { DrawerActions } from "@react-navigation/native";

export default function HomeScreen({navigation}) {
    return (
        <View style={styles.container}>

           <View style={styles.header}>
             <TouchableOpacity onPress={ () => navigation.dispatch(DrawerActions.toggleDrawer())}>
                <MaterialCommunityIcons name="menu" size={30} color='#AF28FF' />
             </TouchableOpacity>
            <Text style={[styles.textTitle, {marginStart: 80}]}>Projeto Amparo</Text>
           </View>

           <Text style={styles.subTextTitle}>Principais Recursos de Emergencia</Text>
           <Text style={styles.subTextTitle}> Disponivel 24 horas por dia</Text>

           <View style={{height: 140}}>
              <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.scrollViewContent} style={styles.carousel}>

              <TouchableOpacity onPress={() => navigation.navigate('Gravar Áudio')}>
                <View style={styles.cardView}>
                  <MaterialCommunityIcons name="microphone" size={36} color='#fff'/>
                  <Text style={styles.cardTextTitle}> Gravar Áudio</Text>
                  <Text style={styles.cardTextSub}>Inicia gravação automaticamente e salva na nuvem com opção de compartilhar</Text>
              </View>
              </TouchableOpacity>

              <TouchableOpacity onPress={ () => navigation.navigate('Contatos de Emergência')}>
                <View style={[styles.cardView, {backgroundColor: '#FF9500'}]}>
                  <MaterialCommunityIcons name="message-alert-outline" size={36} color='#fff'/>
                  <Text style={styles.cardTextTitle}> Alertar Contatos</Text>
                  <Text style={styles.cardTextSub}>Envia SMS imediato para os contatos cadastrados de emergência</Text>
              </View>
              </TouchableOpacity>

              <TouchableOpacity>
                <View style={[styles.cardView, {backgroundColor: '#FF0000'}]}>
                  <Feather name="phone-call" size={36} color='#fff' />
                  <Text style={styles.cardTextTitle}> Ligar 190</Text>
                  <Text style={styles.cardTextSub}>Faz ligação direta para a Polícia Militar se o dispositivo permitir</Text>
              </View>
              </TouchableOpacity>

               <TouchableOpacity onPress={ () => navigation.navigate('Botão de Emergência')}>
                 <View style={[styles.cardView, {backgroundColor: '#FF0000'}]}>
                   <MaterialCommunityIcons name="alert-decagram" size={36} color='#fff' />
                   <Text style={styles.cardTextTitle}> Botão De Emergência</Text>
                   <Text style={styles.cardTextSub}>Aperte caso esteja em perigo</Text>
               </View>
               </TouchableOpacity>

              <TouchableOpacity onPress={ () => navigation.navigate('Modo Discreto')}>
                 <View style={[styles.cardView, {backgroundColor: '#FF0000'}]}>
                    <MaterialCommunityIcons name="calculator" size={36} color='#fff' />
                    <Text style={styles.cardTextTitle}>Modo Discreto</Text>
                    <Text style={styles.cardTextSub}>Para não levantar suspeitas</Text>
                 </View>
              </TouchableOpacity>
              
              </ScrollView>
           </View>

           <View style={styles.cardFrases}>
             <Text style={{fontSize: 12, fontWeight: 'bold', color: colors.primary, textAlign: 'center'}}>
                "Romper o silêncio é o primeiro passo para a liberdade."
            </Text>
           </View>

           <View style={styles.cardObjetivo}>
            <View style={styles.cardObjetivoHeader}>
                <FontAwesome name="heart" size={22} color={colors.primary}/>
                <Text style={{fontSize: typography.text.fontSize, color: colors.primary, fontWeight: 'bold'}}>
                    O que é o projeto Amparo?
                </Text>
                <FontAwesome name="heart" size={22} color={colors.primary}/>
            </View>

             <Text style={{color: colors.primary, fontWeight: 'bold', fontSize: 13, textAlign: 'center'}}>
                O Projeto Amparo é uma plataforma digital dedicada ao apoio integral de mulheres vítimas de violência sexual. 
                Oferecemos suporte jurídico, psicossocial e comunitário através de recursos tecnológicos seguros e acessíveis.
            </Text>

            <Text style={{color: colors.primary, fontWeight: 'bold',fontSize: 13,marginTop: 10, textAlign: 'center'}}>
                Nossa missão é proporcionar ferramentas de proteção, orientação e acolhimento, 
                conectando mulheres em situação de vulnerabilidade com redes de apoio especializadas e recursos de emergência.
            </Text>

            <Text style={{color: colors.primary, fontWeight: 'bold',fontSize: 13,marginTop: 10, textAlign: 'center'}}>
                Acreditamos que toda mulher merece viver livre de violência, com dignidade e segurança. 
                O Projeto Amparo está aqui para apoiar você em cada passo dessa jornada.
            </Text>
           </View>

           <View style={styles.bottomView}>
             <Text style={{fontSize: 16, color: '#fff', textAlign: 'center', fontWeight: 'bold'}}>
                Siga-nos nas Redes Sociais
             </Text>
             <View style={styles.bottomViewRow}>
                <Image 
                  source={require('../images/instaicon.png')}
                  style={{width: 25, height: 25}} />
                <Image 
                  source={require('../images/tiktokicon.png')} 
                  style={{width: 25, height: 25}}/>
             </View>
             <Text style={styles.cardTextTitle}>@amparoofc</Text>
           </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
    },
    header: {
        flex: 1,
        width: '100%',
        height: 100,
        paddingStart: 20,
        marginBottom: 30,
        backgroundColor: colors.background,
        alignItems: 'center',
        justifyContent: 'flex-start',
        flexDirection: 'row',
        borderBottomStartRadius: 50,
        borderBottomLeftRadius: 50,
        borderWidth: 0.3,
        borderColor: '#000',
        elevation: 3
    },
    textTitle: {
        fontSize: typography.title.fontSize,
        fontWeight: typography.title.fontWeight,
        color: colors.primary
    },
    subTextTitle: {
        fontSize: typography.subtitle.fontSize,
        fontWeight: typography.subtitle.fontWeight,
        color: colors.primary
    },
    scrollViewContent: {
        padding: 15,
        alignItems: 'center'
    },
    carousel: {
        height: 140,           // 120 (altura do card) + margens/paddings
        alignSelf: 'stretch',
        marginTop: 16
    },
    cardView: {
        backgroundColor: colors.primary,
        width: 260,
        height: 120,
        marginHorizontal: 10,
        padding: 5,
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center'
    },
    cardTextTitle: {
        fontSize: typography.body.fontSize,
        fontWeight: 'bold',
        color: colors.background,
        textAlign: 'center'
    },
    cardTextSub: {
        fontSize: 12,
        fontWeight: 'bold',
        color: colors.background,
        textAlign: 'center'
    },
    cardFrases: {
        width: 360,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20,
        borderRadius: 20,
        borderTopWidth: 1,
        borderLeftWidth: 4,
        borderEndWidth: 1,
        borderBottomWidth: 1,
        borderColor: colors.primary
    },
    cardObjetivo: {
        width: 360,
        height: 290,
        marginTop: 20,
        paddingTop: 10,
        paddingStart: 7,
        paddingEnd: 7,
        borderRadius: 15,
        borderWidth: 2,
        borderColor: colors.primary
    },
    cardObjetivoHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 10
    },
    bottomView: {
        width: '100%',
        height: 130,
        paddingTop: 5,
        alignItems: 'center',
        borderTopEndRadius: 50,
        marginTop: 50,
        backgroundColor: colors.primary
    },
    bottomViewRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 5
    }
        
})