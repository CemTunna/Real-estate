import React, { useState } from 'react';
import Register from '@/components/auth/Register';
import Login from '@/components/auth/Login';
import { useNavigate } from 'react-router-dom';
import forgotPassword from '@/helpers/forgotPassword';
const useForm = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    name: '',
  });
  const [showPassword, setShowPassword] = useState(false);
  const { email, password, name } = formData;
  const navigate = useNavigate();
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value,
    }));
  };

  const onSubmit = (e?: any) => {
    e.preventDefault();
    // register
    if (email.length > 0 && password.length > 0 && name.length > 0) {
      Register({ email, password, name, formData });
      navigate('/');
      console.log('register');
    }
    // login
    if (email.length > 0 && password.length > 0 && name.length === 0) {
      Login({ email, password, navigate });
      console.log('login');
    }
    // forgot password
    if (email.length > 0 && name.length === 0 && password.length === 0) {
      forgotPassword(formData.email);
      console.log(formData);
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
