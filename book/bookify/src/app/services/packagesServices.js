import {
  collection,
  getDocs,
  doc,
  deleteDoc,
} from "firebase/firestore";

import { db } from "@/firebase/firebase";

const COLLECTION_NAME = "packages";


//add package


export const addPackage = async (packageData) => {
  try {
    console.log("Document written with data:", packageData); // Debugging line
    const docRef = await addDoc(collection(db, COLLECTION_NAME), {
      packageName: packageData.packageName,
      packageType: packageData.packageType,
      amount: packageData.amount,
      validFrom: packageData.validFrom,
      validUntil: packageData.validUntil,
      days: packageData.days,
      description: packageData.description,
      terms: packageData.terms,
    });

    return {
      id: docRef.id,
      success: true,
    };
  } catch (error) {
    throw error;
  }
};

     
 //get packages
  

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


//delete package
export const deletePackage = async (id) => {
  try {
    await deleteDoc(doc(db, COLLECTION_NAME, id));
    return id;
  } catch (error) {
    throw error;
  }
};