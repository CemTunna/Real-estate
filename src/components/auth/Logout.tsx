import firebaseAuth from '@/helpers/firebaseAuth';

const Logout = () => {
  const { auth } = firebaseAuth();
  auth.signOut();
};

export default Logout;
