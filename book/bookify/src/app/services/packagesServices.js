import {
  collection,
  getDocs,
  doc,
  deleteDoc,
} from "firebase/firestore";

import { db } from "@/firebase/firebase";

const COLLECTION_NAME = "packages";

export const getPackages = async () => {
  try {
    const snapshot = await getDocs(collection(db, COLLECTION_NAME));

    return snapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
       created: doc.data().created?.toDate().toISOString().split("T")[0],
    }));
  } catch (error) {
    throw error;
  }
};

export const deletePackage = async (id) => {
  try {
    await deleteDoc(doc(db, COLLECTION_NAME, id));
    return id;
  } catch (error) {
    throw error;
  }
};