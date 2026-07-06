// "use client"

// import react, { useState } from "react";
// import AuthLayout from "../layout";

// const Signup=()=>{
//  const [selectedType, setSelectedType] = useState(null);

//     return(

//         <>

//       <div className="w-full max-w-2xl px-8 py-6 flex flex-col h-full">

//         {/* Top bar: Title + Step indicator */}
//         <div className="flex items-center justify-between mb-2">
//           <h2 className="text-black text-xl font-semibold">Account set up</h2>
//           <span className="text-black text-xl font-semibold">1/3</span>
//         </div>

//         {/* Progress bar */}
//         <div className="w-full h-2 bg-gray-200 rounded-full mb-16">
//           <div className="w-1/3 h-2 bg-black rounded-full" />
//         </div>

//         {/* Main content - centered vertically in remaining space */}
//         <div className="flex-1 flex flex-col justify-center">

//           {/* Heading */}
//           <h1 className="text-black text-3xl font-bold mb-3">Sign Up</h1>
//           <p className="text-gray-400 text-sm font-light mb-10">
//             Please choose one what are you looking.
//           </p>

//           {/* Selection cards */}
//           <div className="flex gap-4 mb-auto">
//             <button
//               onClick={() => setSelectedType('individual')}
//               className={`flex-1 py-4 px-6 rounded-lg border-2 text-center font-medium transition-all
//                 ${selectedType === 'individual' 
//                    ? 'border-black bg-black text-white' 
//                   : 'border-gray-200 bg-white text-gray-700 hover:border-gray-400'
//                 }`}
//             >
//               Individual
//             </button>
//             <button
//               onClick={() => setSelectedType('business')}
//               className={`flex-1 py-4 px-6 rounded-lg border-2 text-center font-medium transition-all
//                 ${selectedType === 'business' 
//                   ? 'border-black bg-black text-white' 
//                   : 'border-gray-200 bg-white text-gray-700 hover:border-gray-400'
//                 }`}
//             >
//               Business Gym
//             </button>

//           </div>
//            <div >
//                 {selectedType === 'individual' &&  
//                 <p className="text-gray-400 text-sm mt-2">I am an individual looking for a gym.</p>}



//                 {selectedType === 'business' && 
//                 <p className="text-gray-400 text-sm mt-2">I am a business owner looking for a gym.</p>}
//             </div>
//         </div>

//         {/* Bottom section */}
//         <div className="mt-auto pb-8">
//           <button
//             disabled={!selectedType}
//             className="w-full py-4 bg-black text-white rounded-full font-medium text-lg
//               disabled:bg-gray-300 disabled:cursor-not-allowed"
//           >
//             Next
//           </button>
//           <p className="text-center mt-4 text-gray-600">
//             If you have an already account{' '}
//             <a href="/login" className="text-black font-semibold underline">
//               Sign In
//             </a>
//           </p>
//         </div>

//       </div>

//         </>

//     )
// }
// export default Signup;

"use client";

import React, { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth, db } from "../../../firebase/firebase";
import { doc, setDoc } from "firebase/firestore";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";

export default function SignUpPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [domainname, setDomainName] = useState("");
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleSignUp = async (e) => {
    e.preventDefault();
    setError(null);

    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    setLoading(true);

    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      const token = await user.getIdToken();

      document.cookie = `token=${token}; path=/; max-age=3600`;

      // // ✅ Save user to Firestore
      await setDoc(
        doc(db, "users", user.uid),
        {
          uid: user.uid,
          name: name,
          email: user.email,
          domain: domainname,
        },
        { merge: true }
      );

      toast.success("Sign up successful!");

      router.push("/dashboard");

    } catch (err) {
      console.error(err);
      setError(err.message || "Failed to create account");
      setLoading(false);
    }
  };

  return (
    <div className="h-screen w-full bg-gray-100 items-center ">
      <div className="h-screen w-full bg-gray-100 items-center flex flex-col">
        <div className="h-screen w-[500px] flex flex-col mt-5">

          {/* Progress bar */}
          {/* <div className="flex items-center justify-between mb-2">
            <h2 className="text-black text-lg font-semibold">Account set up</h2>
            <span className="text-black text-lg font-semibold">1/3</span>
          </div>
          <div className="w-full h-1.5 bg-gray-200 rounded-full mb-10">
            <div className="w-1/3 h-1.5 bg-black rounded-full" />
          </div> */}

          {/* Heading */}
          <div className="flex flex-col mb-6">
            <h1 className="text-black text-3xl font-bold leading-12">Sign Up</h1>

          </div>

          {/* Sign up form */}
          <div className="flex flex-col">
            <form onSubmit={handleSignUp}>
              <label className="text-gray-700 font-medium my-2 block">Company Domain</label>
              <input
                type="text"
                placeholder="https://yourcompany domain"
                value={domainname}
                onChange={(e) => setDomainName(e.target.value)}
                required
                autoComplete="username"
                className="w-full mb-2 px-4 py-3 bg-white text-black rounded focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder:text-sm placeholder:text-gray-400"
              />
              <label className="text-gray-700 font-medium my-2 block">Name</label>
              <input
                type="text"
                placeholder="John Doe"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                autoComplete="name"
                className="w-full mb-2 px-4 py-3 text-black bg-white rounded focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder:text-sm placeholder:text-gray-400"
              />



              <label className="text-gray-700 font-medium my-2 block">Email</label>
              <input
                type="email"
                placeholder="johan@gmail.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                autoComplete="username"
                className="w-full mb-2 px-4 py-3 text-black bg-white rounded focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder:text-sm placeholder:text-gray-400"
              />

              <label className="text-gray-700 font-medium my-2 block">Password</label>
              <input
                type="password"
                placeholder="Enter Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                autoComplete="new-password"
                className="w-full mb-2 px-4 py-3 text-black bg-white rounded focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder:text-sm placeholder:text-gray-400"
              />

              <label className="text-gray-700 font-medium my-2 block">Confirm Password</label>
              <input
                type="password"
                placeholder="Confirm Password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
                autoComplete="new-password"
                className="w-full mb-2 px-4 py-3 text-black bg-white rounded focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder:text-sm placeholder:text-gray-400"
              />

              {error && (
                <p className="text-red-600 mb-4 text-center font-medium">{error}</p>
              )}

              {/* Sign up button */}
              <button
                type="submit"
                disabled={loading}
                className="w-full bg-black mt-3 text-white py-3 rounded-3xl disabled:bg-gray-950"
              >
                {loading ? "Creating account..." : "Submit"}
              </button>
            </form>

            {/* Login link */}
            <div className="text-center mt-4">
              <span className="text-sm text-gray-400">
                Already have an account?
              </span>
              <button
                type="button"
                onClick={() => router.push("/login")}
                className="ml-2 text-black hover:underline"
              >
                Log In
              </button>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

