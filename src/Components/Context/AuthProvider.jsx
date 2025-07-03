import React from 'react';
import { AuthContext } from './AuthContext';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth';
import { auth } from '../../Firebase/firebase.init';
import { GoogleAuthProvider } from 'firebase/auth/web-extension';

const googleProvider = new GoogleAuthProvider();
const AuthProvider = ({ children }) => {

  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password)
  }

  const signInUser = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password)
  }

  // google sign in
  const googleSignIn = () => {
    return signInWithPopup(auth, googleProvider)
  }


  const userInfo = {
    createUser,
    signInUser,
    googleSignIn
  }
  return (
    <AuthContext value={userInfo}>
      {children}
    </AuthContext>
  );
};

export default AuthProvider;