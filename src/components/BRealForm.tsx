import React from 'react';
import { makeStyles } from 'tss-react/mui';
interface Props {
  children: React.ReactNode;
  onSubmit?: (e: any) => void;
}
const useStyles = makeStyles()((theme) => ({
  form: {
    padding: '1rem',
    display: 'flex',
    flexDirection: 'column',
    [theme.breakpoints.down('sm')]: {
      alignItems: 'center',
    },
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
