import React, { useState } from 'react';
import Register from '@/components/auth/Register';
import Login from '@/components/auth/Login';
import { useNavigate } from 'react-router-dom';
import forgotPassword from '@/helpers/forgotPassword';
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
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value,
    }));
  };

  const onSubmit = (e?: any) => {
    e.preventDefault();
    // register
    if (email!.length > 0 && password!.length > 0 && name!.length > 0) {
      email &&
        password &&
        name &&
        Register({ email, password, name, formData });
      navigate('/');
    }
    // login
    if (email!.length > 0 && password!.length > 0 && name!.length === 0) {
      email && password && Login({ email, password, navigate });
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
