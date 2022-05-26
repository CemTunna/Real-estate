import React from 'react';
import { Button, ButtonProps, Grid } from '@mui/material';
import { makeStyles } from 'tss-react/mui';
import classNames from 'classnames';
interface Props {
  children: React.ReactNode;
  onSubmit?: () => void;
}
const useStyles = makeStyles()((theme) => ({
  form: {
    padding: '1rem',
    display: 'flex',
    flexDirection: 'column',
  },
}));

const BRealForm = ({ children, onSubmit }: Props) => {
  const { classes } = useStyles();
  return (
    <form className={classes.form} onSubmit={onSubmit && onSubmit}>
      {children}
    </form>
  );
};

export default BRealForm;
