import useCurrentUser from '@/hooks/useCurrentUser';
import React, { useEffect, useState } from 'react';

const Profile = () => {
  const [user, setUser] = useState();
  const authUser = useCurrentUser();

  console.log(user);
  useEffect(() => {
    setUser(authUser);
  }, []);
  return user ? <h1>{user.displayname}</h1> : 'Not Logged In';
};

export default Profile;
