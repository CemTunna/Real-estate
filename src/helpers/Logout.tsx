import useCurrentUser from '@/hooks/useCurrentUser';
const Logout = () => {
  const authUser = useCurrentUser();
  authUser.signOut();
};

export default Logout;
