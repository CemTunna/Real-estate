import { Button, Grid, IconButton, Typography } from '@mui/material';
import React, { Fragment, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import VisibilityIcon from '@mui/icons-material/Visibility';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
const SignUp = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    name: '',
  });
  const { email, password, name } = formData;
  const navigate = useNavigate();
  const onChange = (e: React.ChangeEventHandler<HTMLInputElement>) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value,
    }));
  };
  return (
    <Fragment>
      <Grid>
        <header>
          <Typography>Welcome back</Typography>
        </header>
        <form action=''>
          <input
            onChange={onChange}
            placeholder='Name'
            id='name'
            value={name}
            type='text'
          />
          <input
            onChange={onChange}
            placeholder='Email'
            id='email'
            value={email}
            type='email'
          />
          <Grid>
            <input
              placeholder='Password'
              id='password'
              value={password}
              onChange={onChange}
              type={showPassword ? 'text' : 'password'}
            />
            <IconButton
              onClick={() => setShowPassword((prevState) => !prevState)}
            >
              <VisibilityIcon />
            </IconButton>
          </Grid>
          <Link to='/forgotPassword'>Forgot Password</Link>
          <Grid>
            <Button>
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
