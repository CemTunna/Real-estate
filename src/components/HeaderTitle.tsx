import { Typography } from '@mui/material';
import React from 'react';
import { makeStyles } from 'tss-react/mui';

const useStyles = makeStyles()((theme) => ({
  title: {
    color: theme.palette.primary.light,
    letterSpacing: '0.5px',
  },
}));
const HeaderTitle = () => {
  const { classes } = useStyles();

  return (
    <Typography variant='h2' className={classes.title}>
      B.Real-Estate
    </Typography>
  );
};

export default HeaderTitle;
