import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Button, Grid, Typography } from '@mui/material';
import googleIcon from './googleIcon.svg';
import Container from '@/components/Container';
import googleAuth from '@/helpers/auth/googleAuth';
import useStyles from './GoogleAuthStyles';
import { toast } from 'react-toastify';
const GoogleAuth = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { classes } = useStyles();

  const onGoogleClick = async () => {
    try {
      await googleAuth();
      navigate('/');
    } catch (error) {
      toast.error("Couldn't Authorize");
    }
  };
  return (
    <Container>
      <Typography className={classes.text}>
        {location.pathname === '/register'
          ? 'You Can Also Create An Account With'
          : 'You Can Also Log In With'}
      </Typography>
      <Button onClick={onGoogleClick} className={classes.btn}>
        <img src={googleIcon} alt='google' className={classes.img} />
      </Button>
    </Container>
  );
};

export default GoogleAuth;
