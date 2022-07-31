import { db } from "../firebase";

import {
  collection,
  getDocs,
  getDoc,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
} from "firebase/firestore";

const listCollectionRef = collection(db, "list");
class DataService {
  addList = (newList) => {
    return addDoc(listCollectionRef, newList);
  };

  updateList = (id, updateList) => {
    const listDoc = doc(db, "list", id);
    return updateDoc(listDoc, updateList);
  };

  deleteList = (id) => {
    const listDoc = doc(db, "list", id);
    return deleteDoc(listDoc);
  };

  getAllList = () => {
    return getDocs(listCollectionRef);
  };

  getList = (id) => {
    const listDoc = doc(db, "list", id);
    return getDoc(listDoc);
  };
}

export default new DataService();