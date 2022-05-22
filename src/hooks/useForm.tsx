import React, { useState } from 'react';
import Register from '@/helpers/Register';
import Login from '@/helpers/Login';
import { useNavigate } from 'react-router-dom';
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
    if (email.length > 0 && password.length > 0 && name.length > 0) {
      Register({ email, password, name, formData });
      navigate('/');
      console.log('im registered');
    }
    if (email.length > 0 && password.length > 0 && name.length === 0) {
      Login({ email, password, navigate });
      console.log('im logged in');
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
