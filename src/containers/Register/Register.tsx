import { Grid, IconButton, InputAdornment } from '@mui/material';
import { Fragment } from 'react';
import { Link } from 'react-router-dom';
import VisibilityIcon from '@mui/icons-material/Visibility';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import useForm from '@/hooks/useForm';
import Container from '@/components/Container';
import Subtitle from '@/components/Subtitle';
import OAuth from '@/components/oauth/OAuth';
import useStyles from './RegisterStyles';
import Form from '@/components/formm/Form';
import Input from '@/components/ui/Input/Input';
import Button from '@/components/ui/Button/Button';

const Register = () => {
  const { classes } = useStyles();

  const {
    name,
    email,
    password,
    onChange,
    showPassword,
    setShowPassword,
    registerSubmit,
  } = useForm();

  return (
    <Fragment>
      <Container>
        <header>
          <Subtitle>Welcome</Subtitle>
        </header>
        <Form onSubmit={registerSubmit}>
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

export default Register;
