import React from "react";

import {createNativeStackNavigator} from '@react-navigation/native-stack'

import SplashScreen from '../screens/SplashScreen'
import LoginScreen from '../screens/LoginScreen'
import DrawerNavigator from "./DrawerNavigator";
import HomeScreen from "../screens/HomeScreen";

const Stack = createNativeStackNavigator()

export default function AppNavigator({initialRoute}) {
    return (
        <Stack.Navigator screenOptions={{headerShown: false}} initialRouteName={initialRoute}>
            <Stack.Screen name="Splash" component={SplashScreen} />
            <Stack.Screen name="Login" component={LoginScreen} />
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="Drawer" component={DrawerNavigator} />
        </Stack.Navigator>
    )
}