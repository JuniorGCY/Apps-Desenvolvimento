import React from "react";
import { View, Text, ActivityIndicator, StyleSheet} from "react-native";
import colors from '../styles/colors'

export default function SplashScreen() {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Projeto Amparo</Text>
            <ActivityIndicator size='large' color = {colors.background} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.primary2,
        justifyContent: 'center',
        alignContent: 'center'
    },
    title: {
        fontSize: 28,
        fontWeight: 'bold',
        color: colors.primary,
        marginBottom: 20
    }
})