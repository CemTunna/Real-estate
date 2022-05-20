import Validation from '@/helpers/Validation';
import React, { useState } from 'react';
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
  if (Validation({ email, password, name })) {
    console.log('im okay');
  }
  return { email, password, name, onChange, showPassword, setShowPassword };
};

export default useForm;
