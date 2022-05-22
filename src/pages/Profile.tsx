import useCurrentUser from '@/hooks/useCurrentUser';
import React, { useState } from 'react';
import { Button, Grid, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import Logout from '@/helpers/Logout';
const Profile = () => {
  const authUser = useCurrentUser();
  const navigate = useNavigate();
  const [data, setData] = useState({
    name: authUser.currentUser!.displayName,
    email: authUser.currentUser!.email,
  });
  const handleLogout = () => {
    Logout();
    navigate('/');
  };
  return (
    <Grid>
      <header>
        <Typography>My Profile</Typography>
        <Button onClick={handleLogout} style={{ border: '1px solid red' }}>
          Log out
        </Button>
      </header>
    </Grid>
  );
};

export default Profile;
