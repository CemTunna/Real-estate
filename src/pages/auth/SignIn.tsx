import { Grid, IconButton, InputAdornment } from '@mui/material';

import React, { Fragment, useEffect, useState } from 'react';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import VisibilityIcon from '@mui/icons-material/Visibility';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import useForm from '@/hooks/useForm';
import { makeStyles } from 'tss-react/mui';
import Subtitle from '@/components/Subtitle';
import BRealButton from '@/components/BRealButton';
import BRealForm from '@/components/BRealForm';
import BRealInput from '@/components/BRealInput';
import Container from '@/components/Container';
import OAuth from '@/components/oauth/OAuth';
const useStyles = makeStyles()((theme) => ({
  input: {
    width: '40rem',
    [theme.breakpoints.down('sm')]: {
      width: '20rem',
    },
  },
  link: {
    marginTop: '1rem',
    color: theme.palette.secondary.main,
    transition: 'all .2s ease-out',
    letterSpacing: '0.5px',
    '&:hover': {
      color: theme.palette.primary.light,
    },
  },
  btn: {
    flex: 1,
    marginTop: '1rem',
  },
}));

const SignIn = () => {
  const { classes } = useStyles();

  const { email, password, onChange, showPassword, setShowPassword, onSubmit } =
    useForm();

  return (
    <Fragment>
      <Container>
        <header>
          <Subtitle>Welcome Back</Subtitle>
        </header>
        <BRealForm onSubmit={onSubmit}>
          <BRealInput
            autoFocus={true}
            id='email'
            onChange={onChange}
            value={email!}
            placeholder='Email'
            type='email'
            className={classes.input}
          />

          <BRealInput
            className={classes.input}
            placeholder='Password'
            id='password'
            value={password!}
            onChange={onChange}
            type={showPassword ? 'text' : 'password'}
            propss={{
              endAdornment: (
                <InputAdornment position='end'>
                  <IconButton
                    onClick={() => setShowPassword((prevState) => !prevState)}
                  >
                    <VisibilityIcon />
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />

          <Link to='/forgotPassword' className={classes.link}>
            Can't Sign In ?
          </Link>
          <Grid style={{ display: 'flex' }}>
            <BRealButton className={classes.btn} type='submit'>
              Sign In
              <ArrowForwardIosIcon />
            </BRealButton>
          </Grid>
        </BRealForm>
        <OAuth />
        <Link to='/signUp' className={classes.link}>
          Sign Up
        </Link>
      </Container>
    </Fragment>
  );
};

export default React.memo(SignIn);
