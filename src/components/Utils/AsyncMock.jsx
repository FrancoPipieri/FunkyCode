import {getFirestore, collection, getDocs, query, where, limit} from 'firebase/firestore';

export const getItem = (id) => {

  const db = getFirestore();

  const q = query(collection(db, "funky-code"),
            where("id", "==", id),
            limit(1)
            );  

  return getDocs(q)
};