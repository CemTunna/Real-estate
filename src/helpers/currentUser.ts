import { getAuth } from 'firebase/auth';
import { app } from '@/firebase';
const currentUser = () => {
  const auth = getAuth(app);
  const currentuser = auth!.currentUser!;

  return { currentuser, auth };
};

export default currentUser;
