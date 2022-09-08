import React from 'react';
import { InputLabel as MuiFormLabel } from '@mui/material';
import useStyles from './FormLabelStyles';
import classNames from 'classnames';
interface Props {
  children: React.ReactNode;
  className?: string;
  label: string;
}
const FormLabel = ({ label, className, children }: Props) => {
  const { classes } = useStyles();

  return (
    <MuiFormLabel
      id={label}
      className={
        !className ? classes.label : classNames(classes.label, className)
      }
    >
      {children}
    </MuiFormLabel>
  );
};

export default FormLabel;
