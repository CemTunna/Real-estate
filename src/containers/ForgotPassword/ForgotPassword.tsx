import React from 'react';
import { Grid } from '@mui/material';
import Subtitle from '@/components/Subtitle';
import Container from '@/components/Container';
import useForm from '@/hooks/useForm';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import useStyles from './ForgotPasswordStyles';
import Form from '@/components/formm/Form';
import Input from '@/components/ui/Input/Input';
import Button from '@/components/ui/Button/Button';
const ForgotPassword = () => {
  const { classes } = useStyles();
  const { onChange, forgotPasswordSubmit, email } = useForm();

  return (
    <Container>
      <header>
        <Subtitle>Forgot Password</Subtitle>
      </header>
      <main>
        <Form onSubmit={forgotPasswordSubmit}>
          <Input
            placeholder='Email'
            type='email'
            id='email'
            value={email!}
            onChange={onChange}
            className={classes.input}
          />

          <Grid style={{ display: 'flex', flexDirection: 'column' }}>
            <Button type='submit' className={classes.btn}>
              Send Reset Link{' '}
              <ArrowRightAltIcon style={{ marginLeft: '10px' }} />
            </Button>
          </Grid>
        </Form>
      </main>
    </Container>
  );
};

export default ForgotPassword;
