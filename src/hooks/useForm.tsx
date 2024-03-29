import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import firebaseAuth from '@/helpers/auth/firebaseAuth';
import { register } from '@/helpers/auth/register';
import { login } from '@/helpers/auth/login';
import { forgotPassword } from '@/helpers/auth/forgotPassword';
import { updateAuth } from '@/helpers/auth/update';
import { toast } from 'react-toastify';
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
  const preventReloadPage = (e?: any) => {
    if (e && e.preventDefault) {
      e.preventDefault();
    }
  };
  const registerSubmit = async (e?: any) => {
    preventReloadPage(e);
    try {
      if (email && password && name) {
        await register({ email, password, name, formData });
        navigate('/');
      }
    } catch (error) {
      toast.error('Password should be at least 6 characters');
    }
  };
  const loginSubmit = async (e?: any) => {
    preventReloadPage(e);

    if (email!.length > 0 && password!.length > 0 && name!.length === 0) {
      try {
        if (email && password) {
          await login({ email, password });
        }
        navigate('/');
      } catch (error) {
        toast.error('Something went wrong');
      }
    }
  };

  const updateSubmit = async (e?: any) => {
    preventReloadPage(e);
    try {
      if (name) {
        await updateAuth({ currentuser, name });
      }
    } catch (error) {
      toast.error('Something went wrong');
    }
  };
  const forgotPasswordSubmit = async (e?: any) => {
    preventReloadPage(e);
    try {
      if (email) {
        await forgotPassword(formData.email!);
        toast.success('Link was sent');
      }
    } catch (error) {
      toast.error("Can't send link");
    }
  };

  return {
    email,
    password,
    name,
    onChange,
    showPassword,
    setShowPassword,
    setFormData,
    registerSubmit,
    loginSubmit,
    updateSubmit,
    forgotPasswordSubmit,
  };
};

export default useForm;
