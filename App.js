import { Container } from 'native-base';
import React from 'react';
import Login from './src/Features/Auth/Login';
import Dashboard from './src/Features/DashBoard';

export default function App() {
  return (
    <Container>
      {/* <Dashboard /> */}
      <Login />
      {/* <StatusBar style="auto" /> */}
    </Container>
  );
}

