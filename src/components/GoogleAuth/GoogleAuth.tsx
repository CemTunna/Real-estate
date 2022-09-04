import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Button, Grid, Typography } from '@mui/material';
import googleIcon from './googleIcon.svg';
import Container from '@/components/Container';
import googleAuth from '@/helpers/googleAuth';
import useStyles from './GoogleAuthStyles';
const GoogleAuth = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { classes } = useStyles();

  const onGoogleClick = async () => {
    googleAuth();
    navigate('/');
  };
  return (
    <Container>
      <Typography className={classes.text}>
        {location.pathname === '/register'
          ? 'YOU CAN ALSO CREATE AN ACCOUNT WITH'
          : 'YOU CAN ALSO LOG IN WITH'}
      </Typography>
      <Button onClick={onGoogleClick} className={classes.btn}>
        <img src={googleIcon} alt='google' className={classes.img} />
      </Button>
    </Container>
  );
};

export default GoogleAuth;
