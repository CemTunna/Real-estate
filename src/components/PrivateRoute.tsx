import useAuthStatus from '@/hooks/useAuthStatus';
import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
const PrivateRoute = () => {
  const { loggedIn, status } = useAuthStatus();
  if (status) return <h3>Loading...</h3>;
  return loggedIn ? <Outlet /> : <Navigate to='/signIn' />;
};

export default PrivateRoute;
