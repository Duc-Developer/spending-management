import React, { useState } from 'react';
import { Container, Form, Item, Input, Label, Button, Text, Icon } from 'native-base';
import styles from './Style';
import { View, Image } from 'react-native';
import Logo from '../../../assets/paypal-letter-logo-in-a-circle.png';
import { ERRORS_CODE } from '../../../Ultilities/EnumAuth';

export default function LoginComponent(props) {
    const { handleSubmit, errors, setErrors } = props;
    const [secureTextEntry, setSecureTextEntry] = useState(true);
    const [user, setUser] = useState({
        email: '',
        password: '',
    });

    function handleChangeText(fieldName, text) {
        setUser({
            ...user,
            [fieldName]: text
        });
        if (errors.code) {
            setErrors({
                code: null,
                message: null,
            });
        }
    }

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
                        <Label style={styles.inputLabel}>Email</Label>
                        <Input
                            value={user.email}
                            onChangeText={(text) => { handleChangeText("email", text) }}
                        />
                        {
                            (errors.code === ERRORS_CODE.INVALID_EMAIL || errors.code === ERRORS_CODE.USER_NOT_FOUND)
                                ? <Icon
                                    type="FontAwesome"
                                    name="exclamation"
                                />
                                : <></>
                        }
                    </Item>
                    <Item floatingLabel >
                        <Label style={styles.inputLabel}>Password</Label>
                        <Input
                            secureTextEntry={secureTextEntry}
                            value={user.password}
                            onChangeText={(text) => { handleChangeText("password", text) }}
                        />
                        {
                            errors.code === ERRORS_CODE.WRONG_PASSWORD
                                ? <Icon
                                    type="FontAwesome"
                                    name="exclamation"
                                />
                                : <></>
                        }
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
                    <Button full rounded onPress={() => { handleSubmit(user) }}>
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