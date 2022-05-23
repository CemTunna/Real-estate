import { Typography } from '@mui/material';
import React from 'react';
import { makeStyles } from 'tss-react/mui';

interface Props {
  children: React.ReactNode;
}
const useStyles = makeStyles()((theme) => ({
  title: {
    color: theme.palette.primary.light,
    letterSpacing: '0.5px',
    fontWeight: 'bold',
  },
}));

const Subtitle = ({ children }: Props) => {
  const { classes } = useStyles();

  return (
    <Typography variant='h3' className={classes.title}>
      {children}
    </Typography>
  );
};

export default Subtitle;
