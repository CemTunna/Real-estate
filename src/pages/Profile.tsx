import useCurrentUser from '@/hooks/useCurrentUser';

import React, { useEffect, useState } from 'react';
import { User } from '@/interfaces/User';
const Profile = () => {
  const [user, setUser] = useState<User | null>(null);
  const authUser = useCurrentUser();

  console.log(user);
  useEffect(() => {
    authUser && setUser(authUser);
  }, []);
  return user ? <h1>{user.displayName}</h1> : <h1> Not Logged In </h1>;
};

export default Profile;
