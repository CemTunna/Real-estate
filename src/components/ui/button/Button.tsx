import React from 'react';
import { Button as MuiButton, ButtonProps } from '@mui/material';
import classNames from 'classnames';
import useStyles from './ButtonStyles';
interface Props extends ButtonProps {
  className?: string;
}

const Button = ({ className, ...rest }: Props) => {
  const { classes } = useStyles();
  return (
    <MuiButton
      className={!className ? classes.btn : classNames(className, classes.btn)}
      {...rest}
    />
  );
};

export default Button;
