import {
  Button,
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

const useStyles = makeStyles()((theme) => ({
  container: {
    padding: '1rem',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  title: {
    color: theme.palette.primary.light,
    letterSpacing: '0.5px',
  },
  form: {
    padding: '1rem',
    display: 'flex',
    flexDirection: 'column',
  },
  input: {
    color: theme.palette.primary.dark,
    letterSpacing: '0.5px',
    marginTop: '1rem',
    border: '2px solid #05386B ',
    borderRadius: '3px',
    overflow: 'hidden',
    padding: '0.5rem',
    width: '40rem',
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
    color: theme.palette.primary.light,
    letterSpacing: '0.5px',
    border: '1px solid ',
    borderColor: theme.palette.secondary.main,
    backgroundColor: theme.palette.secondary.main,
    textTransform: 'capitalize',
    flex: 1,
    marginTop: '1rem',
    '&:hover': {
      color: theme.palette.secondary.main,
    },
  },
}));
const SignUp = () => {
  const { classes } = useStyles();

  const { name, email, password, onChange, showPassword, setShowPassword } =
    useForm();

  return (
    <Fragment>
      <Grid className={classes.container}>
        <header>
          <Typography variant='h3' className={classes.title}>
            Welcome back
          </Typography>
        </header>

        <form className={classes.form}>
          <TextField
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
            <Button className={classes.btn}>
              Sign Up
              <ArrowForwardIosIcon />
            </Button>
          </Grid>
        </form>
        {/* google oath */}
        <Link to='/signIn'>Sign In</Link>
      </Grid>
    </Fragment>
  );
};

export default SignUp;
