import { auth, db } from "@/firebase/firebase";
import { sendPasswordResetEmail } from "firebase/auth";
import {
  collection,
  query,
  where,
  getDocs,
} from "firebase/firestore";

export const forgotPassword = async (email, domain) => {
  try {
    const q = query(
      collection(db, "users"),
      where("email", "==", email.trim().toLowerCase()),
      where("domain", "==", domain.trim().toLowerCase())
    );

    const snapshot = await getDocs(q);

    if (snapshot.empty) {
      return {
        success: false,
        message: "Invalid email or company domain.",
      };
    }

    await sendPasswordResetEmail(auth, email.trim());

    return {
      success: true,
      message: "Password reset link has been sent to your email.",
    };
  } catch (error) {
  console.log(error.code);
  console.log(error.message);

  return {
    success: false,
    message: error.message,
  };
}
};