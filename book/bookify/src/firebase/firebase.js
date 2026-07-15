// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

import { getStorage } from "firebase/storage";





const firebaseConfig = {
  apiKey: "AIzaSyDWJpk0GBo2fKo0yK_b41BIp4wovQXKFkY",
  authDomain: "bookifydb-c190d.firebaseapp.com",
  projectId: "bookifydb-c190d",
  storageBucket: "bookifydb-c190d.firebasestorage.app",
  messagingSenderId: "523977368848",
  appId: "1:523977368848:web:2fe63cec0727ab9ca8b195",
  measurementId: "G-XPN5FE6T02"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

export const auth = getAuth(app);
export const db = getFirestore(app);