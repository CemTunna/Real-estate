import React from 'react';
import {
  getAuth,
  createUserWithEmailAndPassword,
  updateProfile,
} from 'firebase/auth';
import { doc, setDoc, serverTimestamp } from 'firebase/firestore';
import { db, app } from '@/firebase';
const Login = () => {
  return <div>Login</div>;
};

export default Login;
