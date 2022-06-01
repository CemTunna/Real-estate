import React from 'react';
import { Button, ButtonProps, Grid } from '@mui/material';
import { makeStyles } from 'tss-react/mui';
import classNames from 'classnames';
interface Props {
  className?: string;
  children: React.ReactNode;
  id: string;
  value: any;
  onClick: () => void;
}
const useStyles = makeStyles()((theme) => ({
  btn: {
    letterSpacing: '0.5px',
    textTransform: 'capitalize',
    borderRadius: '4px',
    padding: '0.375rem 0.5rem',
    cursor: 'pointer',
  },
}));

const BRealFormButton = ({
  className,
  id,
  value,
  children,
  onClick,
  ...rest
}: Props) => {
  const { classes } = useStyles();
  return (
    <button
      onClick={onClick}
      id={id}
      value={value}
      className={!className ? classes.btn : classNames(className, classes.btn)}
      {...rest}
    >
      {children}
    </button>
  );
};

export default BRealFormButton;
