// SignUp.js
import React, { useState } from 'react'
import { StyleSheet, Text, TextInput, View, Button } from 'react-native'
export default function Register() {
    const [user, setUser] = useState({ email: '', password: '', errorMessage: null })
    handleSignUp = () => {
        // TODO: Firebase stuff...
        console.log('handleSignUp')
    }

    return (
        <View style={styles.container}>
            <Text>Sign Up</Text>
            {user.errorMessage &&
                <Text style={{ color: 'red' }}>
                    {user.errorMessage}
                </Text>}
            <TextInput
                placeholder="Email"
                autoCapitalize="none"
                style={styles.textInput}
                onChangeText={email => this.setState({ email })}
                value={user.email}
            />
            <TextInput
                secureTextEntry
                placeholder="Password"
                autoCapitalize="none"
                style={styles.textInput}
                onChangeText={password => this.setState({ password })}
                value={user.password}
            />
            <Button title="Sign Up" onPress={this.handleSignUp} />
            <Button
                title="Already have an account? Login"
                onPress={() => this.props.navigation.navigate('Login')}
            />
        </View>
    )

}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    textInput: {
        height: 40,
        width: '90%',
        borderColor: 'gray',
        borderWidth: 1,
        marginTop: 8
    }
})