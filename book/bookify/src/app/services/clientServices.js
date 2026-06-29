import { addDoc, collection, getDocs, orderBy, query, serverTimestamp } from "firebase/firestore";
import { db } from "@/firebase/firebase";

export const addClient = async (clientData) => {
  try {
    const docRef = await addDoc(collection(db, "clients"), {
      firstName: clientData.firstName,
      lastName: clientData.lastName,
      email: clientData.email,
      group: clientData.group,
      dob: clientData.dob,
      gender: clientData.gender,
      phoneNumber: clientData.phoneNumber,
      status: clientData.status || "Active",
      createdAt: serverTimestamp(),
      updatedAt: serverTimestamp(),
    });

    return {
      id: docRef.id,
      success: true,
    };
  } catch (error) {
    throw error;
  }
};

// 
export const getClients = async () => {
  const clientsRef = collection(db, "clients");
  const q = query(clientsRef, orderBy("createdAt", "desc"));
  const snapshot = await getDocs(q);

  return snapshot.docs.map((doc) => {
    const data = doc.data();

    return {
      id: doc.id,
      ...data,

      createdAt: data.createdAt
        ? data.createdAt.toDate().toISOString()
        : null,

      updatedAt: data.updatedAt
        ? data.updatedAt.toDate().toISOString()
        : null,

      dob:
        data.dob && typeof data.dob.toDate === "function"
          ? data.dob.toDate().toISOString()
          : data.dob,
    };
  });
};