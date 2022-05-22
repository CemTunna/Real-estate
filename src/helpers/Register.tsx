import React from 'react';
import {
  getAuth,
  createUserWithEmailAndPassword,
  updateProfile,
} from 'firebase/auth';
import { doc, setDoc, serverTimestamp } from 'firebase/firestore';
import { db, app } from '@/firebase';
import { toast } from 'react-toastify';

interface Props {
  email: string;
  password: string;
  name: string;
  formData: any;
}
interface DataCopy {
  email: string;
  password?: string;
  name: string;
  timestamp?: any;
}
const Register = async ({ email, password, name, formData }: Props) => {
  try {
    const auth = getAuth(app);
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    const user = userCredential.user;
    updateProfile(auth.currentUser!, {
      displayName: name,
    });
    const dataCopy: DataCopy = { ...formData };
    delete dataCopy.password;
    dataCopy.timestamp = serverTimestamp();
    await setDoc(doc(db, 'users', user.uid), dataCopy);
  } catch (error) {
    toast.error('Something went wrong...');
  }
};

export default Register;
