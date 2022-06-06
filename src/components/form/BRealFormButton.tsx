import React from 'react';
import { Button, ButtonProps, Grid } from '@mui/material';
import { makeStyles } from 'tss-react/mui';
import classNames from 'classnames';
interface Props {
  children: React.ReactNode;
  id?: string;
  value?: any;
  onClick?: (e: any) => void;
  isActive: boolean;
}
const useStyles = makeStyles()((theme) => ({
  btn: {
    letterSpacing: '0.5px',
    textTransform: 'capitalize',
    borderRadius: '4px',
    padding: '0.375rem 0.5rem',
    cursor: 'pointer',
    marginRight: '1rem',
    width: '10rem',
    border: '1px solid #333',
    backgroundColor: theme.palette.primary.dark,
    color: theme.palette.primary.light,
    transition: 'all .5s ease-out',
    opacity: 0.6,
  },
  // btn: {
  //   marginRight: '1rem',
  //   width: '10rem',
  //   border: '1px solid #333',
  //   backgroundColor: theme.palette.primary.dark,
  //   color: theme.palette.primary.light,
  //   transition: 'all .5s ease-out',
  //   opacity: 0.6,
  // },

  btnActive: {
    letterSpacing: '0.5px',
    textTransform: 'capitalize',
    borderRadius: '4px',
    padding: '0.375rem 0.5rem',
    cursor: 'pointer',
    marginRight: '1rem',
    width: '10rem',
    backgroundColor: theme.palette.secondary.dark,
    border: '1px solid #e74c0e',
    color: theme.palette.primary.light,
    transition: 'all .2s ease-out',
  },
}));

const BRealFormButton = ({
  id,
  value,
  children,
  onClick,
  isActive,
  ...rest
}: Props) => {
  const { classes } = useStyles();
  return (
    <button
      onClick={onClick && onClick}
      id={id && id}
      value={value && value}
      className={isActive ? classes.btnActive : classes.btn}
      {...rest}
    >
      {children}
    </button>
  );
};

export default BRealFormButton;
