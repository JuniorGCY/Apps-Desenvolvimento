import React from "react";
import { View, Text, StyleSheet, ScrollView, TouchableOpacity} from "react-native";

import colors from "../styles/colors";
import {MaterialCommunityIcons} from '@expo/vector-icons'
import { DrawerActions } from "@react-navigation/native";


export default function BotaoPanico({navigation}) {
    return (
        <ScrollView>
            <View style={styles.header}>
               <TouchableOpacity style={{marginStart: 20, marginEnd: 20}} onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())}>
                 <MaterialCommunityIcons name="menu" size={30} color='#FF0000' />
               </TouchableOpacity>
            
               <MaterialCommunityIcons name="alert" size={30} color='#FF0000'/>
               <Text style={{fontSize: 25,color: colors.danger, fontWeight: 'bold', marginStart: 15, textAlign: 'center'}}>Botão de Pânico</Text>
            </View>

            <View style={styles.cardFuncionamento}>
                <View style={{flexDirection: 'row', marginTop: 20}}>
                    <MaterialCommunityIcons name="shield-alert-outline" size={30} color='#FF0000' />
                    <Text style={{color: colors.danger, fontWeight: '700', fontSize: 16}}>Como funciona o Botão de Panico</Text>
                </View>
                
                <Text style={{color: colors.danger, fontWeight: '400', fontSize: 14, marginTop: 10}}>O Botão de Panico ativa automaticamente tres ações de emergencias simultaneas</Text>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    scrollView: {
        flex: 1,
        backgroundColor: '#FFEDF9',
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
    cardFuncionamento: {
        width: 370,
        height: 200,
        paddingHorizontal: 20,
        alignSelf: 'center',
        alignItems: 'center',
        backgroundColor: colors.background,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#000',
        elevation: 3
    }
})