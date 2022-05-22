import React from 'react';
import {
  getAuth,
  updateProfile,
  signInWithEmailAndPassword,
} from 'firebase/auth';
import { doc, setDoc, serverTimestamp } from 'firebase/firestore';
import { db, app } from '@/firebase';
interface Props {
  email: string;
  password: string;
  navigate: Function;
}
const Login = async ({ email, password, navigate }: Props) => {
  try {
    const auth = getAuth(app);
    const userCredential = await signInWithEmailAndPassword(
      auth,
      email,
      password
    );
    if (userCredential.user) {
      navigate('/');
    }
  } catch (error) {
    console.log(error);
  }
};

export default Login;
