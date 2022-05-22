import React from 'react';
import { getAuth } from 'firebase/auth';
import { app } from '@/firebase';
const useCurrentUser = () => {
  const auth = getAuth(app);
  return auth.currentUser;
};

export default useCurrentUser;
