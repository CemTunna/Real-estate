import { TextField } from '@mui/material';
import React from 'react';
import { makeStyles } from 'tss-react/mui';
import classNames from 'classnames';
interface Props {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value: string;
  placeholder: string;
  type: string;
  id: string;
  className?: string;
  propss?: any;
  autoFocus?: boolean;
}
const useStyles = makeStyles()((theme) => ({
  input: {
    color: theme.palette.primary.dark,
    letterSpacing: '0.5px',
    marginTop: '1rem',
    border: '2px solid #05386B ',
    borderRadius: '3px',
    overflow: 'hidden',
    padding: '0.5rem',
  },
}));

const BRealInput = ({
  className,
  onChange,
  value,
  placeholder,
  type,
  id,
  propss,
  autoFocus,
}: Props) => {
  const { classes } = useStyles();
  return (
    <TextField
      autoFocus={autoFocus}
      variant='standard'
      InputProps={{
        disableUnderline: true,
        ...propss,
      }}
      className={
        !className ? classes.input : classNames(className, classes.input)
      }
      onChange={onChange}
      placeholder={placeholder}
      id={id}
      value={value}
      type={type}
    />
  );
};

export default BRealInput;
