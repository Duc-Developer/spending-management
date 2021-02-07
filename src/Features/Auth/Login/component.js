import React, { useState } from 'react';
import { Container, Form, Item, Input, Label, Button, Text, Icon } from 'native-base';
import styles from './Style';
import { View, Image } from 'react-native';
import Logo from '../../../assets/paypal-letter-logo-in-a-circle.png';

export default function LoginComponent() {
    const [secureTextEntry, setSecureTextEntry] = useState(true);

    function switchTextEntry() {
        setSecureTextEntry(!secureTextEntry);
    }

    return (
        <Container style={styles.root}>
            <View style={styles.wrapper}>
                <View style={styles.wrapperLogo}>
                    <Image style={styles.logo} source={Logo} />
                </View>
                <Form style={styles.form}>
                    <Item floatingLabel>
                        <Label style={styles.inputLabel}>Username</Label>
                        <Input />
                    </Item>
                    <Item floatingLabel >
                        <Label style={styles.inputLabel}>Password</Label>
                        <Input secureTextEntry={secureTextEntry} />
                        {
                            secureTextEntry
                                ? <Icon
                                    active
                                    type="FontAwesome"
                                    name="eye"
                                    style={styles.textBoxIcon}
                                    onPress={switchTextEntry}
                                />
                                : <Icon
                                    active
                                    type="FontAwesome"
                                    name="eye-slash"
                                    style={styles.textBoxIcon}
                                    onPress={switchTextEntry}
                                />
                        }
                    </Item>
                </Form>
                <View style={styles.control}>
                    <Button full rounded>
                        <Text style={styles.whiteText}>Login</Text>
                    </Button>
                    <Button full transparent light>
                        <Text style={styles.whiteText}>Register</Text>
                    </Button>
                </View>
            </View>
        </Container>
    );

}