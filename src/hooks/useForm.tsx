import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import {
  forgotPasswordRequest,
  loginRequest,
  registerRequest,
  updateRequest,
} from '@/state/reducers/authSlice';
import firebaseAuth from '@/helpers/firebaseAuth';
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
        dispatch(registerRequest({ email, password, name, formData }));
    }
    // login
    if (email!.length > 0 && password!.length > 0 && name!.length === 0) {
      email && password && dispatch(loginRequest({ email, password }));
    }
    // forgot password
    if (email!.length > 0 && name!.length === 0 && password!.length === 0) {
      dispatch(forgotPasswordRequest(formData.email!));
    }
    // update
    if (email!.length > 0 && name!.length > 0 && password!.length === 0) {
      name && dispatch(updateRequest({ currentuser, name }));
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
