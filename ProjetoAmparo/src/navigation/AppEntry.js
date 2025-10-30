import React, {useEffect,useState} from "react";
import { View, Text, StyleSheet, Image} from "react-native";
import { ActivityIndicator} from "react-native";
import AppNavigator from "./AppNavigator";
import NetInfo from '@react-native-community/netinfo'
import {checkUserLogged} from '../hooks/usesAuth'
import colors from "../styles/colors";

export default function AppEntry() {
    const [loading,setLoading] = useState(true)
    const [initialRoute,setInitialRoute] = useState('Splash')

    useEffect ( () => {
        const init = async () => {
            const state = await NetInfo.fetch()

            if (!state.isConnected) {
                //offline pula login
                setInitialRoute('Drawer')
            } else {
                //Online verifica Login
                /*const logged = await checkUserLogged()
                setInitialRoute(logged ? 'Home' : 'Home')*/
                setInitialRoute('Drawer')
            }

            setTimeout ( () => setLoading(false),1500)
        }

        init()
    }, [])


    if (loading) {
        return (
            <View style={styles.container}>
                <ActivityIndicator size="large" color="#A459D1" />
                <Text style={{fontWeight: 'bold', color: colors.background, fontSize: 30}}>Projeto Amparo</Text>
            </View>
        )
    }

    return <AppNavigator initialRoute={initialRoute} />
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: colors.primary2
    }
})