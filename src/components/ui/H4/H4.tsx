import { Typography } from '@mui/material';
import React from 'react';
import useStyles from './H4Styles';
import classNames from 'classnames';
interface Props {
  children: React.ReactNode;
  className?: string;
}

const H4 = ({ className, children }: Props) => {
  const { classes } = useStyles();

  return (
    <Typography
      variant='h4'
      className={
        !className ? classes.title : classNames(classes.title, className)
      }
    >
      {children}
    </Typography>
  );
};

export default H4;
