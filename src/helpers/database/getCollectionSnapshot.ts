import { getDocs } from 'firebase/firestore';

const getCollectionSnapshot = async (query: any) => {
  const querySnap = await getDocs(query);
  let collection: any = [];
  querySnap.forEach((doc) => {
    return collection.push({
      id: doc.id,
      data: doc.data(),
    });
  });
  return { querySnap, collection };
};
export default getCollectionSnapshot;
