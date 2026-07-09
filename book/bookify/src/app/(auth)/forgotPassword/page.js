"use client";

import { useState } from "react";

import Input from "@/app/component/uicomponents/input"
import Button from "@/app/component/uicomponents/button";
import { forgotPassword } from "@/app/services/authServices";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";


const ForgotPassword=()=>{
    const [loading, setLoading] = useState(false);
    const [domainname, setDomainName] = useState("");
    const[email,setEmail]=useState("")

const router=useRouter()

 const handleSubmit = async (e) => {
  e.preventDefault();

  if (!domainname.trim()) {
    toast.error("Company domain is required.");
    return;
  }

  if (!email.trim()) {
    toast.error("Email is required.");
    return;
  }

  setLoading(true);

  const response = await forgotPassword(email, domainname);

  setLoading(false);

  if (response.success) {
    toast.success(response.message);

    setEmail("");
    setDomainName("");
    router.back()
  } else {
    toast.error(response.message);
  }
};


  





    return(<>
    
     <div className="h-screen w-full bg-gray-100  items-center flex flex-col ">
        <div className="h-screen w-full bg-gray-100  items-center flex flex-col ">

          <div className="h-screen w-[500]  flex flex-col mt-22 ">

            {/* heading */}
            <div className="flex mt-3 flex-col">
              <h1 className="text-black text-3xl  font-bold leading-12">Forgot Password?</h1>
              <span className="text-gray-500 mt-2 text-sm">Enter your company domain and email. we'll help you get back in</span>
            </div>

            {/* loginform */}

            <div className="flex flex-col mt-6">
              <form
                onSubmit={handleSubmit}

              >
              
                <Input
                label="Company Domain"
                  type="text"
                  name="comapany Domain"
                  placeholder="yourcompany.com"
                  value={domainname}
                  onChange={(e) => setDomainName(e.target.value)}
                  required
              
                  className="w-full mb-2 px-4 py-3  bg-white  text-black rounded focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder:text-sm placeholder:text-gray-400"
                />

                 <Input
                label="Email"
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
     
                  className="w-full mb-2 px-4 py-3  bg-white  text-black rounded focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder:text-sm placeholder:text-gray-400"
                />


  {/* signinbutton */}

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-black mt-6  text-white py-3 rounded-3xl   disabled:bg-gray-950"
                >
                  {loading ? "Logging in..." : "Submit"}
                </button>
                </form>
  </div>
  
  <div className="text-center mt-4">
                <span className="text-sm text-gray-400">
                  Don't have an account?
                </span>

                <Button
                  type="button"
                  onClick={() => router.push("/signup")}
                  className="ml-2 text-black hover:underline"
                >
                  Sign Up
                </Button>
              </div>
  
  
  
  
  </div>  </div> </div>
    
    
    
    
    </>)
}
export default ForgotPassword