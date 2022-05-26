import React from 'react';
import { Grid } from '@mui/material';
import Subtitle from '@/components/Subtitle';
import Container from '@/components/Container';
import BRealForm from '@/components/BRealForm';
import BRealInput from '@/components/BRealInput';
import { makeStyles } from 'tss-react/mui';
import BRealButton from '@/components/BRealButton';
import useForm from '@/hooks/useForm';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
const useStyles = makeStyles()((theme) => ({
  input: {
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
    flex: 1,
    marginTop: '1rem',
  },
}));
const ForgotPassword = () => {
  const { classes } = useStyles();
  const { onChange, onSubmit, email } = useForm();

  return (
    <Container>
      <header>
        <Subtitle>Forgot Password</Subtitle>
      </header>
      <main>
        <BRealForm onSubmit={onSubmit}>
          <BRealInput
            placeholder='Email'
            type='email'
            id='email'
            value={email}
            onChange={onChange}
            className={classes.input}
          />

          <Grid style={{ display: 'flex', flexDirection: 'column' }}>
            <BRealButton type='submit' className={classes.btn}>
              Send Reset Link{' '}
              <ArrowRightAltIcon style={{ marginLeft: '10px' }} />
            </BRealButton>
          </Grid>
        </BRealForm>
      </main>
    </Container>
  );
};

export default ForgotPassword;
