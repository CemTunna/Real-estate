import { Grid, IconButton, InputAdornment } from '@mui/material';
import { Fragment, useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import VisibilityIcon from '@mui/icons-material/Visibility';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import useForm from '@/hooks/useForm';
import Container from '@/components/Container';
import Subtitle from '@/components/Subtitle';
import OAuth from '@/components/oauth/OAuth';
import useStyles from './SignupStyles';
import Form from '@/components/formm/Form';
import Input from '@/components/ui/input/Input';
import Button from '@/components/ui/button/Button';

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
          <Subtitle>Welcome</Subtitle>
        </header>
        <Form onSubmit={onSubmit}>
          <Input
            autoFocus={true}
            className={classes.input}
            onChange={onChange}
            placeholder='Name'
            id='name'
            value={name!}
            type='text'
          />
          <Input
            className={classes.input}
            onChange={onChange}
            placeholder='Email'
            id='email'
            value={email!}
            type='email'
          />
          <Input
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
            <Button className={classes.btn} type='submit'>
              Sign Up
              <ArrowForwardIosIcon />
            </Button>
          </Grid>
        </Form>
        <OAuth />

        <Link to='/login' className={classes.link}>
          Log In
        </Link>
      </Container>
    </Fragment>
  );
};

export default SignUp;
