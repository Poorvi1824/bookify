// import { auth, db } from "../firebase/firebase";
// import { onAuthStateChanged } from "firebase/auth";
// import { doc, setDoc } from "firebase/firestore";

// export const listenToAuthChanges = (callback) => {
//   return onAuthStateChanged(auth, (user) => {
//     if (user) {
//       const userData = {
//         uid: user.uid,
//         email: user.email,
//         displayName: user.displayName,
//         photoURL: user.photoURL,
//         lastLogin: new Date(),
//       };
//       // Save user data to Firestore
//       setDoc(doc(db, "users", user.uid), userData).catch((error) => {
//         console.error("Error saving user data:", error);
//       });
//       callback(userData);
//     } else {
//       callback(null);
//     }
//   });
// };

"use client";

import React, { useState } from "react";    

const DashboardPage = () => {
  return (
    <div>
      <h1>Dashboard</h1>
      <p>Welcome to your dashboard!</p>
    </div>
  );
};

export default DashboardPage;