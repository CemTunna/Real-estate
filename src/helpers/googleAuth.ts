import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import firebaseAuth from '@/helpers/firebaseAuth';
import { db } from '@/firebase';
import { doc, getDoc, serverTimestamp, setDoc } from 'firebase/firestore';
const { auth } = firebaseAuth();

const googleAuth = async () => {
  const result = await signInWithPopup(auth, new GoogleAuthProvider());
  const user = result.user;
  // check for user
  const docSnap = await getDoc(doc(db, 'users', user.uid));
  // if user doesnt exist create user
  if (!docSnap.exists()) {
    await setDoc(doc(db, 'users', user.uid), {
      name: user.displayName,
      email: user.email,
      timestamp: serverTimestamp(),
    });
  }
};

export default googleAuth;
