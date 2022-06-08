import { Grid } from '@mui/material';
import React from 'react';
import { makeStyles } from 'tss-react/mui';

interface Props {
  children: React.ReactNode;
  icon?: any;
}
const useStyles = makeStyles()((theme) => ({
  container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '1rem',
    marginBottom: '1rem',
    transition: 'all .5s ease-out',
    borderRadius: '4px',
    '&:hover': {
      boxShadow:
        'rgba(6, 24, 44, 0.4) 0px 0px 0px 2px, rgba(6, 24, 44, 0.65) 0px 4px 6px -1px, rgba(255, 255, 255, 0.08) 0px 1px 0px inset',
    },
    border: '1px solid #3333337d',
    [theme.breakpoints.down('sm')]: {
      padding: '0.2rem',
    },
  },
  icon: {
    display: 'flex',
    marginTop: '0.5rem',
    color: '#333',
  },
}));

const BRealFormSubContainer = ({ children, icon }: Props) => {
  const { classes } = useStyles();

  return (
    <Grid className={classes.container}>
      <Grid>{children}</Grid>
      <Grid className={classes.icon}>{icon}</Grid>
    </Grid>
  );
};

export default BRealFormSubContainer;
