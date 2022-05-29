import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import logout from '@/helpers/auth/logout';
import updateProfile from '@/helpers/auth/updateProfile';
import firebaseAuth from '@/helpers/firebaseAuth';
import useForm from './useForm';

const useUpdate = () => {
  const { currentuser } = firebaseAuth();
  const navigate = useNavigate();
  const { name, email, setFormData } = useForm();

  useEffect(() => {
    setFormData({ name: currentuser.displayName!, email: currentuser.email! });
  }, [setFormData, currentuser.email, currentuser.displayName]);
  const [changedDetails, setChangedDetails] = useState(false);
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value,
    }));
  };

  const onSubmit = () => {
    name && updateProfile({ currentuser, name });
  };
  const handleLogout = () => {
    logout();
    navigate('/');
  };
  return {
    handleLogout,
    name,
    email,
    onSubmit,
    onChange,
    changedDetails,
    setChangedDetails,
  };
};

export default useUpdate;
