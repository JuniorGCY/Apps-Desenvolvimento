import React from "react";
import { View, Text, StyleSheet } from "react-native";
import {MaterialCommunityIcons} from'@expo/vector-icons'

export default function ModalContentPsi3() {
    return (
        <View style={style.container}>
            <Text style={{fontWeight: '900', fontSize: 16, color: '#ff3030ff'}}>Diário de Gratidão</Text>
            <Text style={{fontWeight: '500', fontSize: 14, marginBottom: 20}}>Prática de registro diário para reconhecer aspectos positivos mesmo em momentos difíceis..</Text>

            <Text style={{fontWeight: '900', fontSize: 16, color: '#ff3030ff'}}>Como praticar:</Text>
            <Text style={{fontWeight: '500', fontSize: 14}}>1 - Reserve alguns minutos ao final do dia</Text>
            <Text style={{fontWeight: '500', fontSize: 14}}>2 - Escreva 3 coisas pelas quais você se sente grata naquele dia</Text>
            <Text style={{fontWeight: '500', fontSize: 14}}>3 - Podem ser coisas simples, como "o sol estava bonito" ou "tomei um bom café"</Text>
            <Text style={{fontWeight: '500', fontSize: 14}}>4 - Escreva também por que isso foi importante para você</Text>
            <Text style={{fontWeight: '500', fontSize: 14}}>5-  Releia suas anotações periodicamente para relembrar momentos positivos</Text>
            
            <Text style={{fontWeight: '900', fontSize: 16, color: '#ff3030ff', marginTop: 10}}>Benefícios:</Text>

            <View style={{flexDirection: 'row'}}>
                <MaterialCommunityIcons name="check" size={20} color='#ff3737ff'/>
                <Text style={{fontWeight: '500', fontSize: 14}}>Redirecionamento do foco para aspectos positivos</Text>
            </View>

            <View style={{flexDirection: 'row'}}>
                <MaterialCommunityIcons name="check" size={20} color='#ff3737ff'/>
                <Text style={{fontWeight: '500', fontSize: 14}}>Cultivo de esperança</Text>
            </View>

            <View style={{flexDirection: 'row'}}>
                <MaterialCommunityIcons name="check" size={20} color='#ff3737ff'/>
                <Text style={{fontWeight: '500', fontSize: 14}}>Melhora do humor</Text>
            </View>

            <View style={{flexDirection: 'row'}}>
                <MaterialCommunityIcons name="check" size={20} color='#ff3737ff'/>
                 <Text style={{fontWeight: '500', fontSize: 14}}>Criação de um registro de momentos de força</Text>
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