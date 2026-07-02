import {
  collection,
  getDocs,
  doc,
  deleteDoc,
  addDoc,
  getDoc,
  updateDoc,
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
console.log("Document ID:", docRef.id);

    return {
      id: docRef.id,
      success: true,
    };
  }catch (error) {
  console.error("Firestore Error:", error);
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

//getpackagesbyid

export const getPackageById = async (id) => {
  const docRef = doc(db, "packages", id);
  const docSnap = await getDoc(docRef);

  if (docSnap.exists()) {
    return {
      id: docSnap.id,
      ...docSnap.data(),
    };
  }

  return null;
};


//update package


export const updatePackage = async (id, packageData) => {
    const docRef = doc(db, COLLECTION_NAME, id);

    await updateDoc(docRef, {
        packageName: packageData.packageName,
        packageType: packageData.packageType,
        amount: packageData.amount,
        validFrom: packageData.validFrom,
        validUntil: packageData.validUntil,
        days: packageData.days,
        description: packageData.description,
        terms: packageData.terms,
    });
};