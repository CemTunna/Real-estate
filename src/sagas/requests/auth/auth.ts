import {
  createUserWithEmailAndPassword,
  getAuth,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  updateProfile,
} from 'firebase/auth';
import { app, db } from '@/firebase';
import { doc, serverTimestamp, setDoc, updateDoc } from 'firebase/firestore';
import firebaseAuth from '@/helpers/firebaseAuth';

interface LoginProps {
  email: string;
  password: string;
}
interface RegisterProps {
  email: string;
  password: string;
  name: string;
  formData: any;
}
interface DataCopy {
  email: string;
  password?: string;
  name: string;
  timestamp?: any;
}
interface UpdateProps {
  name: string;
  currentuser: any;
}
export const login = async ({ email, password }: LoginProps) => {
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
export const register = async ({
  email,
  password,
  name,
  formData,
}: RegisterProps) => {
  try {
    const auth = getAuth(app);
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

    return true;
  } catch (error) {
    return false;
  }
};
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
    return true;
  } catch (error) {
    return false;
    // toast.error('Could not update profile credentials');
  }
};

export const forgotPassword = async (email: string) => {
  const { auth } = firebaseAuth();

  try {
    await sendPasswordResetEmail(auth, email);
    return TrustedHTML;
  } catch (error) {
    return false;
  }
};
