import { db } from '@/firebase';
import { updateProfile } from 'firebase/auth';
import { doc, updateDoc } from 'firebase/firestore';
import { toast } from 'react-toastify';

interface UpdateProps {
  name: string;
  currentuser: any;
}

export const updateAuth = async ({ currentuser, name }: UpdateProps) => {
  try {
    if (currentuser.displayName !== name) {
      // update display name in fb
      await updateProfile(currentuser, {
        displayName: name,
      });
      // update in firestore
      const userRef = doc(db, 'users', currentuser.uid);
      await updateDoc(userRef, {
        name,
      });
    }
  } catch (error) {
    toast.error('Could not update profile credentials');
  }
};
