import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Logout from '@/components/auth/Logout';
import UpdateProfile from '@/components/auth/UpdateProfile';
import firebaseAuth from '@/helpers/firebaseAuth';

const useUpdate = () => {
  const { currentuser } = firebaseAuth();
  const navigate = useNavigate();
  const [data, setData] = useState({
    name: currentuser.displayName,
    email: currentuser.email,
  });

  const { name, email } = data;

  const [changedDetails, setChangedDetails] = useState(false);
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setData((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value,
    }));
  };

  const onSubmit = (e?: any) => {
    UpdateProfile({ currentuser, name });
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
