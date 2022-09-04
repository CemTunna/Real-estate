import { sendPasswordResetEmail } from 'firebase/auth';
import firebaseAuth from '../firebaseAuth';

export const forgotPassword = async (email: string) => {
  const { auth } = firebaseAuth();

  await sendPasswordResetEmail(auth, email);
};
