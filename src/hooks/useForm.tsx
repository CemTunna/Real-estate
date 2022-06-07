import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import firebaseAuth from '@/helpers/firebaseAuth';
import { register } from '@/helpers/auth/register';
import { login } from '@/helpers/auth/login';
import { forgotPassword } from '@/helpers/auth/forgotPassword';
import { updateAuth } from '@/helpers/auth/update';
interface Form {
  email?: string;
  password?: string;
  name?: string;
}
const useForm = () => {
  const [formData, setFormData] = useState<Form>({
    email: '',
    password: '',
    name: '',
  });
  const [showPassword, setShowPassword] = useState(false);
  const { email, password, name } = formData;
  const navigate = useNavigate();
  const { currentuser } = firebaseAuth();
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value,
    }));
  };

  const onSubmit = (e?: any) => {
    if (e && e.preventDefault) {
      e.preventDefault();
    }
    // register
    if (email!.length > 0 && password!.length > 0 && name!.length > 0) {
      email &&
        password &&
        name &&
        register({ email, password, name, formData });
      navigate('/');
    }
    // login
    if (email!.length > 0 && password!.length > 0 && name!.length === 0) {
      email && password && login({ email, password });
      navigate('/');
    }
    // forgot password
    if (email!.length > 0 && name!.length === 0 && password!.length === 0) {
      email && forgotPassword(formData.email!);
    }
    // update
    if (email!.length > 0 && name!.length > 0 && password!.length === 0) {
      name && updateAuth({ currentuser, name });
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
    setFormData,
  };
};

export default useForm;
