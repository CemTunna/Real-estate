import currentUser from '@/helpers/currentUser';

const Logout = () => {
  const { auth } = currentUser();
  auth.signOut();
};

export default Logout;
