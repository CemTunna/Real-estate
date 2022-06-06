import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { app } from '@/firebase';

interface Props {
  email: string;
  password: string;
}
export const login = async ({ email, password }: Props) => {
  try {
    const auth = getAuth(app);
    const userCredential = await signInWithEmailAndPassword(
      auth,
      email,
      password
    );
    if (userCredential.user) {
      return true;
    }
  } catch (error) {
    return false;
  }
};
