import React, { useEffect, useRef } from 'react'
import { View, StyleSheet, Animated, Easing  } from 'react-native';
// import AsyncStorage from '@react-native-async-storage/async-storage';
import firebaseApp from '../../../firebase';
import coinLogo from '../../assets/money.png'

export default function WelcomeScreenContainer({ navigation }) {
    // const zAnim = useRef(new Animated.Value(0)).current;
    const yAnim = useRef(new Animated.Value(0)).current;

    useEffect(() => {
        coinAnimation();
        firebaseApp.auth().onAuthStateChanged(userAuth => {
            if (!userAuth) {
                navigation.navigate('Login');
            } else {
                navigation.navigate('Dashboard');
            }
        })
    }, []);

    const coinAnimation = () => {
        Animated.parallel([
            // Animated.timing(
            //     zAnim,
            //     {
            //       toValue: 360,
            //       duration: 4000,
            //       easing: Easing.linear,
            //       useNativeDriver: true
            //     }
            //   ).start(),
              Animated.timing(
                yAnim,
                {
                  toValue: 360,
                  duration: 4000,
                  easing: Easing.linear,
                  useNativeDriver: true
                }
              ).start()
        ])
    }

    return (
        <View style={styles.container}>
            <Animated.Image 
            style={{
                ...styles.coinLogo,
                transform: [
                    { 
                        rotateY: yAnim.interpolate({
                        inputRange: [0, 360],
                        outputRange: ['0deg', '360deg']
                      })  
                    },
                    // { 
                    //     rotateZ: zAnim.interpolate({
                    //     inputRange: [0, 360],
                    //     outputRange: ['0deg', '360deg']
                    //   }) 
                    // }
                ]
            }} 
            source={coinLogo} 
            />
        </View>
    )

}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    coinLogo: {
        height: 120,
        width: 120,
        borderRadius: 100,
        // transform: [
        //     // { rotateY: "45deg" },
        //     { rotateX: "45deg" }
        // ]
    }
})