"use client";

import React, { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth, db } from "../../../firebase/firebase";
import { onAuthStateChanged } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [domainname, setDomainName] = useState("");
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const router = useRouter();



  const handleLogin = async (e) => {
    e.preventDefault();
    setError(null);
    setLoading(true);

    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);

      const user = userCredential.user;

      // Get Firebase Token

      const token = await user.getIdToken();


      console.log("Firebase Token:", token);
      // Save token in cookie

      document.cookie = `token=${token}; path=/; max-age=3600`;

      console.log("Cookie Created");

      // // ✅ Save user to Firestore
      // await setDoc(doc(db, "users", user.uid), {
      //   uid: user.uid,
      //   email: user.email,
      //   // displayName: user.displayName || "",
      //   // photoURL: user.photoURL || "",
      //   domain: domainname, // 👈 your extra field
      //   // lastLogin: serverTimestamp(), // ✅ better than new Date()
      // }, { merge: true }); // prevents overwrite

      // console.log("User saved to Firestore ✅");

      console.log(auth.currentUser);

      alert("Login successful!");


      // 👉 Optional redirect
      router.push("/dashboard");

    } catch (err) {
      console.error(err);
      setError("Invalid email or password");
      setLoading(false);
    }
  };


  return (

    <>




      {/* //rightside */}

      <div className="h-screen w-full bg-gray-100  items-center flex flex-col ">
        <div className="h-screen w-full bg-gray-100  items-center flex flex-col ">

          <div className="h-screen w-[500]  flex flex-col mt-22 ">

            {/* heading */}
            <div className="flex flex-col">
              <h1 className="text-black text-3xl font-bold leading-12">Hey there! Ready to get back to business?</h1>
              <span className="text-gray-500  text-sm">Please share the contact details of your business</span>
            </div>

            {/* loginform */}

            <div className="flex flex-col">
              <form
                onSubmit={handleLogin}

              >
                <label className="text-gray-700 font-medium my-2 block">Company Domain</label>
                <input
                  type="text"
                  placeholder="https://yourcompany domain"
                  value={domainname}
                  onChange={(e) => setDomainName(e.target.value)}
                  required
                  autoComplete="username"
                  className="w-full mb-2 px-4 py-3  bg-white  text-black rounded focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder:text-sm placeholder:text-gray-400"
                />

                <label className="text-gray-700 font-medium my-2 block">Email</label>
                <input
                  type="email"
                  placeholder="johan@gmail.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  autoComplete="username"
                  className="w-full mb-2 px-4 py-3  text-black bg-white  rounded focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder:text-sm placeholder:text-gray-400"
                />

                <label className="text-gray-700 font-medium my-2 block">Password</label>
                <input
                  type="password"
                  placeholder="Enter Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  autoComplete="current-password"
                  className="w-full mb-2 px-4 py-3  text-black  bg-white rounded focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder:text-sm placeholder:text-gray-400"
                />

                {error && (
                  <p className="text-red-600 mb-4 text-center font-medium">{error}</p>
                )}


                <div className="flex flex-col justify-end mt-4">
                  <span className="text-black font-semibold text-text15 text-end hover:underline tracking-wide">forgot password</span>
                  <span className="text-black font-semibold text-text15 text-end hover:underline tracking-wide">forgot company name?</span>


                </div>

                {/* signinbutton */}

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-black mt-3  text-white py-3 rounded-3xl   disabled:bg-gray-950"
                >
                  {loading ? "Logging in..." : "Login"}
                </button>

              </form>


              {/* //signup section */}

              <div className="text-center mt-4">
                <span className="text-sm text-gray-400">
                  Don't have an account?
                </span>

                <button
                  type="button"
                  onClick={() => router.push("/signup")}
                  className="ml-2 text-black hover:underline"
                >
                  Sign Up
                </button>
              </div>
            </div>










          </div>


        </div>
      </div>








    </>
  );
}

