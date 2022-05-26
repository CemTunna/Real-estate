import {
  Grid,
  IconButton,
  InputAdornment,
  TextField,
  Typography,
} from '@mui/material';
import { Fragment, useState } from 'react';
import { Link } from 'react-router-dom';
import VisibilityIcon from '@mui/icons-material/Visibility';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import useForm from '@/hooks/useForm';
import { makeStyles } from 'tss-react/mui';
import BRealButton from '@/components/BRealButton';
import Container from '@/components/Container';
import Subtitle from '@/components/Subtitle';
import BRealForm from '@/components/BRealForm';

const useStyles = makeStyles()((theme) => ({
  input: {
    color: theme.palette.primary.dark,
    letterSpacing: '0.5px',
    marginTop: '1rem',
    border: '2px solid #05386B ',
    borderRadius: '3px',
    overflow: 'hidden',
    padding: '0.5rem',
    width: '40rem',
    '&:-internal-autofill-selected': {
      backgroundColor: 'red',
    },
  },
  link: {
    marginTop: '1rem',
    color: theme.palette.secondary.main,
    transition: 'all .2s ease-out',
    letterSpacing: '0.5px',
    '&:active': {
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
          <TextField
            autoFocus
            variant='standard'
            InputProps={{
              disableUnderline: true,
            }}
            className={classes.input}
            onChange={onChange}
            placeholder='Name'
            id='name'
            value={name}
            type='text'
          />
          <TextField
            variant='standard'
            InputProps={{
              disableUnderline: true,
            }}
            className={classes.input}
            onChange={onChange}
            placeholder='Email'
            id='email'
            value={email}
            type='email'
          />
          <TextField
            variant='standard'
            className={classes.input}
            placeholder='Password'
            id='password'
            value={password}
            onChange={onChange}
            type={showPassword ? 'text' : 'password'}
            InputProps={{
              disableUnderline: true,
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
        {/* google oath */}
        <Link to='/signIn'>Sign In</Link>
      </Container>
    </Fragment>
  );
};

export default SignUp;
