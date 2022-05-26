import React from 'react';
import { Button, ButtonProps, Grid } from '@mui/material';
import { makeStyles } from 'tss-react/mui';
import classNames from 'classnames';
interface Props extends ButtonProps {
  className?: string;
}
const useStyles = makeStyles()((theme) => ({
  btn: {
    color: theme.palette.primary.light,
    letterSpacing: '0.5px',
    border: '1px solid ',
    borderColor: theme.palette.secondary.main,
    backgroundColor: theme.palette.secondary.main,
    textTransform: 'capitalize',
    '&:hover': {
      color: theme.palette.secondary.main,
    },
  },
}));

const BRealButton = ({ className, ...rest }: Props) => {
  const { classes } = useStyles();
  return (
    <Button
      className={!className ? classes.btn : classNames(className, classes.btn)}
      {...rest}
    />
  );
};

export default BRealButton;
