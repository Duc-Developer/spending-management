import React from 'react';
import firebaseApp from '../../../../firebase';
import LoginComponent from './component';

export default function LoginContainer() {

    const handleSubmit = ({ email, password }) => {
        console.log(email, password)
        firebaseApp.auth().signInWithEmailAndPassword(email, password)
  .then((userCredential) => {
    // Signed in
    var user = userCredential.user;
    console.log(user)
    // ...
  })
  .catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
  });
    }

    return (
        <React.Fragment>
            <LoginComponent
                handleSubmit={handleSubmit}
            />
        </React.Fragment>
    );
}