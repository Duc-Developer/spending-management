import React, { useState } from 'react';
import firebaseApp from '../../../../firebase';
import LoginComponent from './component';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function LoginContainer() {
  const [errors, setErrors] = useState({
    code: null,
    message: null,
  });

  const handleSubmit = ({ email, password }) => {
    async function loginWithEmailAndPassword() {
      const user = await firebaseApp.auth().signInWithEmailAndPassword(email, password)
        .then((userCredential) => {
          // Signed in
          return userCredential.user;
          // ...
        })
        .catch((error) => {
          const errorMessage = error.message;
          const errorCode = error.code;
          setErrors({
            code: errorCode,
            message: errorMessage,
          });
          alert(errorMessage);
        });
      if (!user) {
        return;
      } else {
        await AsyncStorage.setItem('uid', user.uid);
      }
    }
    loginWithEmailAndPassword();
  }

  return (
    <React.Fragment>
      <LoginComponent
        handleSubmit={handleSubmit}
        errors={errors}
        setErrors={setErrors}
      />
    </React.Fragment>
  );
}