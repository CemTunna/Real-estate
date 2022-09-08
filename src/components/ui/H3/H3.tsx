import { Typography } from '@mui/material';
import React from 'react';
import useStyles from './H3Styles';
import classNames from 'classnames';
interface Props {
  children: React.ReactNode;
  className?: string;
}

const H3 = ({ className, children }: Props) => {
  const { classes } = useStyles();

  return (
    <Typography
      variant='h3'
      className={
        !className ? classes.title : classNames(classes.title, className)
      }
    >
      {children}
    </Typography>
  );
};

export default H3;
