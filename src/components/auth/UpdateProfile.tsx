import { updateProfile } from 'firebase/auth';
import { db } from '@/firebase';
import { updateDoc, doc } from 'firebase/firestore';
import { toast } from 'react-toastify';

interface Props {
  name: string;
  currentuser: any;
}
const UpdateProfile = async ({ currentuser, name }: Props) => {
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

export default UpdateProfile;
