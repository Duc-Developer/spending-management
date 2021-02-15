import React from 'react'
import { StyleSheet, Platform, Image, Text, View } from 'react-native'
import { createSwitchNavigator, createAppContainer } from 'react-navigation'
// import the different screens
import WelcomeScreen from './src/Features/WelcomeScreen';
import Register from './src/Features/Auth/Register';
import Login from './src/Features/Auth/Login';
import Dashboard from './src/Features/DashBoard';
// create our app's navigation stack
const App = createAppContainer(createSwitchNavigator(
  {
    WelcomeScreen,
    Register,
    Login,
    Dashboard
  },
  {
    initialRouteName: 'WelcomeScreen'
  }
))
export default App