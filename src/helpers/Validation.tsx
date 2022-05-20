import React from 'react';
import validator from 'validator';
interface Props {
  email?: string;
  name?: string;
  password?: string;
}
const Validation = ({ email, name, password }: Props) => {
  const testEmail = email && email.trim().toLowerCase();
  const testPassword = password && password.trim().toLowerCase();
  const testName = name && name.trim().toLowerCase();

  if (
    validator.isEmail(testEmail!) &&
    validator.isLength(testPassword!, { min: 6, max: 12 })
  ) {
    return true;
  }
  if (
    validator.isLength(testName!, { min: 3, max: 30 }) &&
    validator.isEmail(testEmail!) &&
    validator.isLength(testPassword!, { min: 6, max: 12 })
  ) {
    return true;
  }
};

export default Validation;
