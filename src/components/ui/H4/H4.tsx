import { Typography } from '@mui/material';
import React from 'react';
import useStyles from './H4Styles';
interface Props {
  children: React.ReactNode;
}

const H3 = ({ children }: Props) => {
  const { classes } = useStyles();

  return (
    <Typography variant='h4' className={classes.title}>
      {children}
    </Typography>
  );
};

export default H3;
