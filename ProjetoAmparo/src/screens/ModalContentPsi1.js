import React from "react";
import { View, Text, StyleSheet } from "react-native";
import {MaterialCommunityIcons} from'@expo/vector-icons'

export default function ModalContentPsi1() {
    return (
        <View style={style.container}>
            <Text style={{fontWeight: '900', fontSize: 16, color: '#ff3030ff'}}>Respiração para Redução de Ansiedade</Text>
            <Text style={{fontWeight: '500', fontSize: 14, marginBottom: 10}}>Exercício de respiração profunda para acalmar o sistema nervoso em momentos de ansiedade.</Text>

            <Text style={{fontWeight: '900', fontSize: 16, color: '#ff3030ff'}}>Como praticar:</Text>
            <Text style={{fontWeight: '500', fontSize: 14}}>1 - Encontre um local tranquilo e sente-se confortavelmente</Text>
            <Text style={{fontWeight: '500', fontSize: 14}}>2 - Coloque uma mão no peito e outra no abdômen</Text>
            <Text style={{fontWeight: '500', fontSize: 14}}>3 - Inspire lentamente pelo nariz contando até 4</Text>
            <Text style={{fontWeight: '500', fontSize: 14}}>Segure a respiração por 2 segundos</Text>
            <Text style={{fontWeight: '500', fontSize: 14}}>Expire lentamente pela boca contando até 6</Text>
            <Text style={{fontWeight: '500', fontSize: 14}}>Repita o ciclo por 5 minutos ou até se sentir mais calma</Text>
            
            <Text style={{fontWeight: '900', fontSize: 16,marginTop: 10, color: '#ff3030ff'}}>Benefícios:</Text>

            <View style={{flexDirection: 'row'}}>
                <MaterialCommunityIcons name="check" size={20} color='#ff3737ff'/>
                <Text style={{fontWeight: '500', fontSize: 14}}>Redução da ansiedade</Text>
            </View>

            <View style={{flexDirection: 'row'}}>
                <MaterialCommunityIcons name="check" size={20} color='#ff3737ff'/>
                <Text style={{fontWeight: '500', fontSize: 14}}>Diminuição da frequência cardíaca</Text>
            </View>

            <View style={{flexDirection: 'row'}}>
                <MaterialCommunityIcons name="check" size={20} color='#ff3737ff'/>
                <Text style={{fontWeight: '500', fontSize: 14}}>Maior clareza mental</Text>
            </View>

            <View style={{flexDirection: 'row'}}>
                <MaterialCommunityIcons name="check" size={20} color='#ff3737ff'/>
                 <Text style={{fontWeight: '500', fontSize: 14}}>Sensação de controle em momentos de crise</Text>
            </View>

        </View>
    )
}

const style = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        padding: 20
    }
})