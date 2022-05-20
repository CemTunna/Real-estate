import Validation from '@/helpers/Validation';

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import Register from '@/helpers/Register';

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

  const onSubmit = async (e?: any) => {
    e.preventDefault();

    try {
      if (Validation({ email, password, name })) {
        Register({ email, password, name, formData });
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
