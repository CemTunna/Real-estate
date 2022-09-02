import { db } from '@/firebase';
import { deleteDoc, doc } from 'firebase/firestore';
import { toast } from 'react-toastify';

const deleteListing = async (
  id: string,
  listings: any,
  setListings: Function
) => {
  await deleteDoc(doc(db, 'listings', id));
  const newListArray = listings.filter((item: any) => item.id !== id);
  setListings(newListArray);
  toast.success('Delete was successful');
};
export default deleteListing;
