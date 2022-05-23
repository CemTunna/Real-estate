import React, { useState } from 'react';
import { Button, Grid, TextField, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import Logout from '@/components/auth/Logout';
import UpdateProfile from '@/components/auth/UpdateProfile';
import useForm from '@/hooks/useForm';
import currentUser from '@/helpers/currentUser';
const Profile = () => {
  const { currentuser } = currentUser();
  const navigate = useNavigate();
  const [data, setData] = useState({
    name: currentuser.displayName,
    email: currentuser.email,
  });
  const { name, email } = data;
  const [changedDetails, setChangedDetails] = useState(false);
  const handleLogout = () => {
    Logout();
    navigate('/');
  };
  const onSubmit = async () => {
    UpdateProfile({ currentuser, name });
  };
  const onChange = (e: any) => {
    setData((prevState) => ({ ...prevState, [e.target.id]: e.target.value }));
  };

  return (
    <Grid>
      <header>
        <Typography>My Profile</Typography>
        <Button onClick={handleLogout} style={{ border: '1px solid red' }}>
          Log out
        </Button>
      </header>
      <main>
        <Grid>
          <Grid>
            <Typography>Personal Details</Typography>
            <Typography
              onClick={() => {
                changedDetails && onSubmit();
                setChangedDetails((prevState) => !prevState);
              }}
            >
              {changedDetails ? 'done' : 'change'}
            </Typography>
          </Grid>
        </Grid>
        <Grid>
          <form action=''>
            <TextField
              type='text'
              id='name'
              className={!changedDetails ? 'profileName' : 'profileNameActive'}
              disabled={!changedDetails}
              value={name}
              onChange={onChange}
            />
            <TextField
              type='email'
              id='email'
              className={
                !changedDetails ? 'profileEmail' : 'profileEmailActive'
              }
              disabled={!changedDetails}
              value={email}
              onChange={onChange}
            />
          </form>
        </Grid>
      </main>
    </Grid>
  );
};

export default Profile;
