import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Logout from '@/components/auth/Logout';
import UpdateProfile from '@/components/auth/UpdateProfile';
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
    name && UpdateProfile({ currentuser, name });
  };
  const handleLogout = () => {
    Logout();
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
