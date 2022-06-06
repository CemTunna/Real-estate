import React, { useState } from 'react';
import register from '@/helpers/auth/register';
import login from '@/helpers/auth/login';
import { useNavigate } from 'react-router-dom';
import forgotPassword from '@/helpers/forgotPassword';
import { useDispatch } from 'react-redux';
import { authRequest } from '@/state/reducers/authSlice';
interface Form {
  email?: string;
  password?: string;
  name?: string;
}
const useForm = () => {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState<Form>({
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
  const handleLogin = (value: { email: string; password: string }) => {
    dispatch(authRequest(value));
  };
  const onSubmit = (e?: any) => {
    e.preventDefault();
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
      email && password && handleLogin({ email, password });
    }
    // forgot password
    if (email!.length > 0 && name!.length === 0 && password!.length === 0) {
      forgotPassword(formData.email!);
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
