import React, { useEffect } from 'react'
import { View, Text, ActivityIndicator, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Loading({ navigation }) {

    useEffect(() => {
        async function checkUserId() {
            const uid = AsyncStorage.getItem('uid');
            if (!uid) {
                navigation.navigate('Login');
            }else {
                navigation.navigate('Dashboard');
            }
        }
        checkUserId();
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