import useAuthStatus from '@/hooks/useAuthStatus';
import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { CircularProgress, Box } from '@mui/material';
const PrivateRoute = () => {
  const { loggedIn, status } = useAuthStatus();
  if (status) {
    return (
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          height: '100vh',
        }}
      >
        <CircularProgress color='secondary' size={70} />
      </Box>
    );
  }
  return loggedIn ? <Outlet /> : <Navigate to='/signIn' />;
};

export default PrivateRoute;
