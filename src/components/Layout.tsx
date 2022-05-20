import { Grid } from '@mui/material';
import React from 'react';
import { makeStyles } from 'tss-react/mui';
interface LayoutProps {
  children: React.ReactNode;
}
const useStyles = makeStyles()((theme) => ({
  container: {
    display: 'flex',
    flexDirection: 'column',
    height: '100vh',
    backgroundColor: theme.palette.primary.main,
  },
}));
const Layout: React.FC<LayoutProps> = ({ children }) => {
  const { classes } = useStyles();

  return <Grid className={classes.container}>{children}</Grid>;
};

export default Layout;
