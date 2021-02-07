import React, { useEffect } from 'react'
import { View, Text, ActivityIndicator, StyleSheet } from 'react-native';

export default function Loading({navigation}) {

    useEffect(() => {
        const timeout = setTimeout(() => {
            navigation.navigate('Login');
        }, 2000);
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