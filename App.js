import React from 'react'
import { StyleSheet, Platform, Image, Text, View } from 'react-native'
import { createSwitchNavigator, createAppContainer } from 'react-navigation'
// import the different screens
import Loading from './src/Components/Loading';
import Register from './src/Features/Auth/Register';
import Login from './src/Features/Auth/Login';
import Dashboard from './src/Features/DashBoard';
// create our app's navigation stack
const App = createAppContainer(createSwitchNavigator(
  {
    Loading,
    Register,
    Login,
    Dashboard
  },
  {
    initialRouteName: 'Loading'
  }
))
export default App