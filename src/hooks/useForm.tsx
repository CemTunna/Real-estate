import Validation from '@/helpers/Validation';
import {
  getAuth,
  createUserWithEmailAndPassword,
  updateProfile,
} from 'firebase/auth';
import { app } from '@/firebase';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { doc, setDoc, serverTimestamp } from 'firebase/firestore';
import { db } from '@/firebase';
interface DataCopy {
  email: string;
  password?: string;
  name: string;
  timestamp?: any;
}
const useForm = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    name: '',
  });
  const [showPassword, setShowPassword] = useState(false);

  const { email, password, name } = formData;
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value,
    }));
  };
  const navigate = useNavigate();

  const onSubmit = async (e?: any) => {
    e.preventDefault();
    try {
      if (Validation({ email, password, name })) {
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
        navigate('/');
      }
    } catch (error) {
      console.log(error);
    }
  };

  return {
    onSubmit,
    email,
    password,
    name,
    onChange,
    showPassword,
    setShowPassword,
  };
};

export default useForm;
