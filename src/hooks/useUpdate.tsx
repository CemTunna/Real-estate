import React, { useEffect, useState } from 'react';
import updateProfile from '@/helpers/auth/updateProfile';
import firebaseAuth from '@/helpers/firebaseAuth';
import useForm from './useForm';

const useUpdate = () => {
  const { currentuser } = firebaseAuth();
  const { name, email, setFormData } = useForm();

  useEffect(() => {
    setFormData({ name: currentuser.displayName!, email: currentuser.email! });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentuser.email, currentuser.displayName]);
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

  return {
    name,
    email,
    onSubmit,
    onChange,
    changedDetails,
    setChangedDetails,
  };
};

export default useUpdate;
