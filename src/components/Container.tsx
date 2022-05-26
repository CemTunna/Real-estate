import React from 'react';
import { Grid } from '@mui/material';
import { makeStyles } from 'tss-react/mui';
interface Props {
  children: React.ReactNode;
}
const useStyles = makeStyles()((theme) => ({
  constainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
}));
const Container = ({ children }: Props) => {
  const { classes } = useStyles();

  return <Grid className={classes.constainer}>{children}</Grid>;
};

export default Container;
