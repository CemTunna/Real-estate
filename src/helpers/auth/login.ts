import { signInWithEmailAndPassword } from 'firebase/auth';
import { toast } from 'react-toastify';
import firebaseAuth from '../firebaseAuth';

interface LoginProps {
  email: string;
  password: string;
}
export const login = async ({ email, password }: LoginProps) => {
  try {
    const { auth } = firebaseAuth();
    const userCredential = await signInWithEmailAndPassword(
      auth,
      email,
      password
    );
    if (userCredential.user) {
      return true;
    }
  } catch (error) {
    toast.error('Something went wrong');
  }
};
