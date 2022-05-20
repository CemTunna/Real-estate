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
    testEmail &&
    validator.isEmail(testEmail) &&
    testPassword &&
    validator.isLength(testPassword, { min: 6, max: 12 })
  ) {
    return true;
  }
  if (
    testEmail &&
    validator.isEmail(testEmail) &&
    testPassword &&
    validator.isLength(testPassword, { min: 6, max: 12 }) &&
    testName &&
    validator.isLength(testName, { min: 3 })
  ) {
    return true;
  }
};

export default Validation;
