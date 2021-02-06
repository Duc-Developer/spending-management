import React, { Component } from 'react';
import { Container, Form, Item, Input, Label, Button, Text } from 'native-base';
import styles from './Style';
import { View, Image } from 'react-native';
import Logo from '../../../assets/paypal-letter-logo-in-a-circle.png';

export default class LoginComponent extends Component {
    render() {
        return (
            <Container style={styles.root}>
                <View style={styles.wrapper}>
                    <View style={styles.wrapperLogo}>
                        <Image style={styles.logo} source={Logo} />
                    </View>
                    <Form>
                        <Item floatingLabel>
                            <Label>Username</Label>
                            <Input />
                        </Item>
                        <Item floatingLabel last>
                            <Label>Password</Label>
                            <Input />
                        </Item>
                    </Form>
                    <View style={styles.control}>
                        <Button full rounded>
                            <Text>Login</Text>
                        </Button>
                        <Button full transparent light>
                            <Text>Register</Text>
                        </Button>
                    </View>
                </View>
            </Container>
        );
    }
}