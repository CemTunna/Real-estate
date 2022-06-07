import React from 'react';
import { Grid } from '@mui/material';
import { makeStyles } from 'tss-react/mui';

interface Props {
  children: React.ReactNode;
}
const useStyles = makeStyles()((theme) => ({
  container: {
    display: 'flex',
    justifyContent: 'space-around',
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',
    },
  },
}));
const BRealFormContainer = ({ children }: Props) => {
  const { classes } = useStyles();

  return <Grid className={classes.container}>{children}</Grid>;
};

export default BRealFormContainer;
