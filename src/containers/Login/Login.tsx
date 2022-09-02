import React, { Fragment, useEffect, useState } from 'react';
import { Grid, IconButton, InputAdornment } from '@mui/material';
import useStyles from './LoginStyles';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import VisibilityIcon from '@mui/icons-material/Visibility';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import useForm from '@/hooks/useForm';
import Subtitle from '@/components/Subtitle';
import Form from '@/components/formm/Form';
import Container from '@/components/Container';
import OAuth from '@/components/oauth/OAuth';
import Input from '@/components/ui/input/Input';
import Button from '@/components/ui/button/Button';
const Login = () => {
  const { classes } = useStyles();

  const {
    loginSubmit,
    email,
    password,
    onChange,
    showPassword,
    setShowPassword,
  } = useForm();

  return (
    <Fragment>
      <Container>
        <header>
          <Subtitle>Welcome Back</Subtitle>
        </header>
        <Form onSubmit={loginSubmit}>
          <Input
            autoFocus={true}
            id='email'
            onChange={onChange}
            value={email!}
            placeholder='Email'
            type='email'
            className={classes.input}
          />
          <Input
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
            <Button className={classes.btn} type='submit'>
              Sign In
              <ArrowForwardIosIcon />
            </Button>
          </Grid>
        </Form>
        <OAuth />
        <Link to='/register' className={classes.link}>
          Sign Up
        </Link>
      </Container>
    </Fragment>
  );
};

export default Login;
