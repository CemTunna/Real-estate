import { Grid, IconButton, InputAdornment } from '@mui/material';
import { Fragment, useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import VisibilityIcon from '@mui/icons-material/Visibility';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import useForm from '@/hooks/useForm';
import { makeStyles } from 'tss-react/mui';
import BRealButton from '@/components/BRealButton';
import Container from '@/components/Container';
import Subtitle from '@/components/Subtitle';
import BRealForm from '@/components/BRealForm';
import BRealInput from '@/components/BRealInput';
import OAuth from '@/components/oauth/OAuth';

const useStyles = makeStyles()((theme) => ({
  input: {
    width: '40rem',
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
const SignUp = () => {
  const { classes } = useStyles();

  const {
    onSubmit,
    name,
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
          <Subtitle>Welcome back</Subtitle>
        </header>
        <BRealForm onSubmit={onSubmit}>
          <BRealInput
            autoFocus={true}
            className={classes.input}
            onChange={onChange}
            placeholder='Name'
            id='name'
            value={name!}
            type='text'
          />
          <BRealInput
            className={classes.input}
            onChange={onChange}
            placeholder='Email'
            id='email'
            value={email!}
            type='email'
          />
          <BRealInput
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
            Forgot Password
          </Link>
          <Grid style={{ display: 'flex' }}>
            <BRealButton className={classes.btn} type='submit'>
              Sign Up
              <ArrowForwardIosIcon />
            </BRealButton>
          </Grid>
        </BRealForm>
        <OAuth />

        <Link to='/signIn'>Sign In</Link>
      </Container>
    </Fragment>
  );
};

export default SignUp;
