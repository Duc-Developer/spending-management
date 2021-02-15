import React, { useEffect } from 'react'
import { View, Text, ActivityIndicator, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import firebaseApp from '../../../firebase';

export default function Loading({ navigation }) {

    useEffect(() => {
        firebaseApp.auth().onAuthStateChanged(userAuth => {
            if (!userAuth) {
                navigation.navigate('Login');
            } else {
                navigation.navigate('Dashboard');
            }
        })
    }, []);
    return (
        <View style={styles.container}>
            <Text>Loading</Text>
            <ActivityIndicator size="large" />
        </View>
    )

}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
})