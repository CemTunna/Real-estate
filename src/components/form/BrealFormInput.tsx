import React from 'react';
import classNames from 'classnames';
import { makeStyles } from 'tss-react/mui';
const useStyles = makeStyles()((theme) => ({
  input: {
    letterSpacing: '0.5px',
    textTransform: 'capitalize',
    borderRadius: '4px',
    padding: '0.375rem 0.5rem',
    border: '1px solid transparent',
    outline: 'none',
    transition: 'all .2s ease-out',
    '&:focus': {
      border: '1px solid #e74c0e',
      boxShadow: '0 0 0 2px #e74c0e',
    },
  },
}));
interface Props {
  type: string;
  id: string;
  value: any;
  maxLength?: number;
  minLength?: number;
  onChange: (e: any) => void;
  required: boolean;
  className?: string;
}
const BrealFormInput = ({
  type,
  maxLength,
  minLength,
  id,
  value,
  onChange,
  required,
  className,
  ...rest
}: Props) => {
  const { classes } = useStyles();

  return (
    <input
      required={required && required}
      maxLength={maxLength && maxLength}
      minLength={minLength && minLength}
      className={
        !className ? classes.input : classNames(classes.input, className)
      }
      type={type}
      id={id}
      value={value}
      onChange={onChange}
      {...rest}
    />
  );
};

export default BrealFormInput;
