import { db } from '@/firebase';
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { doc, serverTimestamp, setDoc } from 'firebase/firestore';
import { toast } from 'react-toastify';
import firebaseAuth from '../firebaseAuth';
interface DataCopy {
  email: string;
  password?: string;
  name: string;
  timestamp?: any;
}

interface RegisterProps {
  email: string;
  password: string;
  name: string;
  formData: any;
}

export const register = async ({
  email,
  password,
  name,
  formData,
}: RegisterProps) => {
  const { auth } = firebaseAuth();
  const userCredential = await createUserWithEmailAndPassword(
    auth,
    email,
    password
  );
  const user = userCredential.user;
  updateProfile(auth.currentUser!, {
    displayName: name,
  });
  const dataCopy: DataCopy = { ...formData };
  delete dataCopy.password;
  dataCopy.timestamp = serverTimestamp();
  await setDoc(doc(db, 'users', user.uid), dataCopy);
};
