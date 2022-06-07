import { sendPasswordResetEmail } from 'firebase/auth';
import { toast } from 'react-toastify';
import firebaseAuth from '../firebaseAuth';

export const forgotPassword = async (email: string) => {
  const { auth } = firebaseAuth();

  try {
    await sendPasswordResetEmail(auth, email);
    toast.success('Link was sent');
  } catch (error) {
    toast.error("Can't send link");
  }
};
