

"use client";

import React, { useEffect, useState } from "react";
import { Building2 } from 'lucide-react';
import OverviewDashboard from "../component/dashboard/overviewDasboard";
import Announcements from "../component/dashboard/annoucement";
import GettingStarted from "../component/dashboard/getstart";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "../redux/features/usersSlice";

import { DayButton } from "react-day-picker";
import { doc, getDoc } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { db } from "@/firebase/firebase";


const DashboardPage = () => {


  const [active, setActive] = useState("Dashboard");
  const [userName, setUserName] = useState("");


  const menuItems = [
    { name: "Dashboard", component: <OverviewDashboard /> },
    { name: "Getting Started", component:<GettingStarted/>},
    { name: "Announcements", component: <Announcements /> },

  ]
   
 const activeComponent = menuItems.find(item => item.name === active)?.component;
//  const currentUser = useSelector((state) => state.auth.user);


useEffect(() => {
    const fetchUser = async () => {
      const auth = getAuth();
      const user = auth.currentUser;

      if (!user) return;

     const docRef = doc(db, "users", user.uid);
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        setUserName(docSnap.data().name);
      }
    };

    fetchUser();
  }, []);
console.log("User Name:", userName);

  const dispatch = useDispatch();

  useEffect(() => {
      console.log("Dispatching users...");
      try{
 dispatch(fetchUsers());
      }
     catch(error){
      console.error("Error dispatching fetchUsers:", error);
     }
    }, [dispatch]);
  
    const userlist = useSelector((state) => state.users.users);
    console.log("Users from Redux:", userlist);


  return (
    <div className="w-full  bg-gray-100">
      <div className="w-full flex flex-col h-40 bg-white pt-8 px-">

        {/* Top Row: Logo and Welcome Message */}
        <div className="w-full h-20 flex items-center gap-4 px-6 pb-3">
          <div className="w-13 h-15 rounded-xl p-3 bg-gray-100 flex items-center justify-center">
            <Building2 className="h-10 w-10 text-gray-500 " />
          </div>
          <div className="flex flex-col">
           
              <span className="text-black text-xl font-semibold">Hello, {userName}</span>
            
            <span className="text-gray-500 text-sm">Fitness Gym</span>
          </div>
        </div>

        {/* Bottom Row: Empty or other content */}
        <div className="w-full h-20 flex items-center gap-2 px-6">
          {menuItems.map((item) => (
            <button
              key={item.name}
              onClick={() =>{ setActive(item.name)

               

              }}
              className={`h-full px-4 text-sm flex items-center justify-center hover:text-black ${active === item.name
                  ? 'text-black border-b-2 border-black'
                  : 'text-gray-500 border-b-2 border-transparent'
                }`}
            >
              {item.name}
            </button>
          ))}
        </div>
      </div>

      {/* Body of the dashboard page */}
      <div className="w-full h-full bg-gray-100 px-10">
        {activeComponent}
      </div>
    </div>
  );

}

export default DashboardPage;