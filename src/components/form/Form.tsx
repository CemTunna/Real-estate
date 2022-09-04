import React from 'react';
import useStyles from './FormStyles';
interface Props {
  children: React.ReactNode;
  onSubmit?: (e: any) => void;
}

const Form = ({ children, onSubmit }: Props) => {
  const { classes } = useStyles();
  return (
    <form className={classes.form} onSubmit={onSubmit && onSubmit}>
      {children}
    </form>
  );
};

export default Form;
