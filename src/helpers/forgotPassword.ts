import { sendPasswordResetEmail } from 'firebase/auth';
import firebaseAuth from '@/helpers/firebaseAuth';
import { toast } from 'react-toastify';
const { auth } = firebaseAuth();

const forgotPassword = async (email: string) => {
  await sendPasswordResetEmail(auth, email);
  toast.success('Email was sent');
  try {
  } catch (error) {
    toast.error('Something went wrong');
  }
};

export default forgotPassword;
