import { Typography } from '@mui/material';
import React from 'react';
import useStyles from './H3Styles';
interface Props {
  children: React.ReactNode;
}

const H3 = ({ children }: Props) => {
  const { classes } = useStyles();

  return (
    <Typography variant='h3' className={classes.title}>
      {children}
    </Typography>
  );
};

export default H3;
