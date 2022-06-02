import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from 'firebase/storage';
import firebaseAuth from './firebaseAuth';
import { v4 as uuid } from 'uuid';

export const storeImages = async (image: any) => {
  return new Promise((resolve, reject) => {
    const store = getStorage();
    const file = `${firebaseAuth().currentuser.uid}-${image.name}-${uuid()}`;
    const storeRef = ref(store, 'images/' + file);
    const uploadTask = uploadBytesResumable(storeRef, image);
    uploadTask.on(
      'state_changed',
      (snapshot) => {
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log('Upload is ' + progress + '% done');
        switch (snapshot.state) {
          case 'paused':
            console.log('Upload is paused');
            break;
          case 'running':
            console.log('Upload is running');
            break;
        }
      },
      (error) => {
        reject(error);
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          resolve(downloadURL);
        });
      }
    );
  });
};
