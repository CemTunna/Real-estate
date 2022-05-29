import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import firebase from '@/helpers/firebaseAuth';
import { doc, setDoc, getDoc, serverTimestamp } from 'firebase/firestore';
import { db } from '@/firebase';
import { Button, Grid, Typography } from '@mui/material';
import BRealButton from '../BRealButton';
import googleIcon from './googleIcon.svg';
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { toast } from 'react-toastify';
import { makeStyles } from 'tss-react/mui';
import Container from '@/components/Container';
import googleAuth from '@/helpers/googleAuth';
const useStyles = makeStyles()((theme) => ({
  text: {
    letterSpacing: '0.5px',
    textTransform: 'lowercase',
    color: theme.palette.primary.dark,
    marginBottom: '0.5rem',
  },
  img: {
    borderRadius: '100px',
    border: '1px solid #3333335b',
    padding: '0.5rem',
    boxShadow:
      'rgba(14, 30, 37, 0.12) 0px 2px 4px 0px, rgba(14, 30, 37, 0.32) 0px 2px 16px 0px',
  },
  btn: {
    borderRadius: '100px',
    padding: 0,
  },
}));
const OAuth = () => {
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
        {location.pathname === '/signUp'
          ? 'YOU CAN ALSO CREATE AN ACCOUNT WITH'
          : 'YOU CAN ALSO LOG IN WITH'}
      </Typography>
      <Button onClick={onGoogleClick} className={classes.btn}>
        <img src={googleIcon} alt='google' className={classes.img} />
      </Button>
    </Container>
  );
};

export default OAuth;
