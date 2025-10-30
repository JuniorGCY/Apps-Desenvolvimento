import React from "react";
import { View, Text, StyleSheet } from "react-native";
import {MaterialCommunityIcons} from'@expo/vector-icons'

export default function ModalContentPsi2() {
    return (
        <View style={style.container}>
            <Text style={{fontWeight: '900', fontSize: 16, color:'#ff3030ff'}}>Escaneamento Corporal para Redução de Estresse</Text>
            <Text style={{fontWeight: '500', fontSize: 14,marginBottom: 10}}>Técnica de atenção plena para reconectar com o corpo e reduzir tensões acumuladas.</Text>

            <Text style={{fontWeight: '900', fontSize: 16, color: '#ff3030ff'}}>Como praticar:</Text>
            <Text style={{fontWeight: '500', fontSize: 14}}>1 - Deite-se em uma posição confortável</Text>
            <Text style={{fontWeight: '500', fontSize: 14}}>2 - Feche os olhos e comece a respirar profundamente</Text>
            <Text style={{fontWeight: '500', fontSize: 14}}>3 - Concentre sua atenção nos dedos dos pés, notando qualquer sensação</Text>
            <Text style={{fontWeight: '500', fontSize: 14}}>4 - Lentamente, mova sua atenção para cada parte do corpo, subindo até a cabeça</Text>
            <Text style={{fontWeight: '500', fontSize: 14}}>5-  Ao encontrar áreas tensas, respire profundamente e imagine o relaxamento</Text>
            <Text style={{fontWeight: '500', fontSize: 14}}>6 - Ao finalizar, permaneça alguns minutos consciente de todo o corpo</Text>
            
            <Text style={{fontWeight: '900', fontSize: 16, marginTop: 10, color: '#ff3030ff'}}>Benefícios:</Text>

            <View style={{flexDirection: 'row'}}>
                <MaterialCommunityIcons name="check" size={20} color='#ff3737ff'/>
                <Text style={{fontWeight: '500', fontSize: 14}}>Redução de tensão muscular</Text>
            </View>

            <View style={{flexDirection: 'row'}}>
                <MaterialCommunityIcons name="check" size={20} color='#ff3737ff'/>
                <Text style={{fontWeight: '500', fontSize: 14}}>Melhor percepção corporal</Text>
            </View>

            <View style={{flexDirection: 'row'}}>
                <MaterialCommunityIcons name="check" size={20} color='#ff3737ff'/>
                <Text style={{fontWeight: '500', fontSize: 14}}>Diminuição do estresse</Text>
            </View>

            <View style={{flexDirection: 'row'}}>
                <MaterialCommunityIcons name="check" size={20} color='#ff3737ff'/>
                 <Text style={{fontWeight: '500', fontSize: 14}}>Melhor qualidade de sono</Text>
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