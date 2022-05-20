import React, { Fragment, useState } from 'react';
const useForm = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    name: '',
  });
  const { email, password, name } = formData;
  console.log('form', formData);
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value,
    }));
  };

  return { email, password, name, onChange };
};

export default useForm;
