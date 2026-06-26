"use client";

import { fetchUsers } from "@/app/redux/features/usersSlice";
import react, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { 
  Mail, 
  Building2, 
  Eye, 
  MessageCircle, 
  MoreVertical, 
  MapPin, 
  Calendar,
  Briefcase,
  Search,
  FileSearch
} from 'lucide-react';

const Members = () => {
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
    <div className="p-6 m-6 bg-white rounded-lg shadow-md">

<div className="w-full flex justify-between h-15  pt-2 px-6 mb-4 gap-4">
  <div className=" flex gap-4 items center">
      <h1 className="text-2xl font-bold mb-4">Gym Members ({userlist.length})</h1> 
      <button className="bg-black text-white  text-sm px-3  rounded-lg ">
       
        Invite  (+)
      </button></div>
<div className="relative">
  <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />

  <input
    type="text"
    placeholder="Search..."
    className="w-full border border-gray-300 rounded-lg pl-10 pr-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
  />
</div>

</div>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
  {userlist.map((user) => (
    <div
      key={user.id}
      className="group bg-white rounded-xl shadow-sm hover:shadow-md border border-gray-100 transition-all duration-200 hover:-translate-y-0.5"
    >
      <div className="p-4 flex items-start gap-3">
        {/* Avatar */}
        <div className="relative shrink-0">
          <div className="w-12 h-12 rounded-xl border-2 border-gray-100 overflow-hidden bg-gray-50">
            <img
              src={user.avatar || `https://ui-avatars.com/api/?name=${encodeURIComponent(user.name)}&background=6366f1&color=fff&size=128&rounded=false`}
              alt={user.name}
              className="w-full h-full object-cover"
            />
          </div>
          <span
            className={`absolute -bottom-0.5 -right-0.5 w-3 h-3 rounded-full border-[2px] border-white ${
              user.isOnline ? 'bg-emerald-500' : 'bg-gray-400'
            }`}
          />
        </div>

        {/* Info */}
        <div className="min-w-0 flex-1">
          <h2 className="text-sm font-bold text-gray-900 group-hover:text-indigo-600 transition-colors truncate">
            {user.name}
          </h2>
          <div className="flex items-center gap-1 mt-0.5">
            <Mail className="w-3 h-3 text-gray-400" />
            <p className="text-xs text-gray-500 truncate">{user.email}</p>
          </div>
          
          {user.Role && (
            <span className="inline-flex items-center gap-1 mt-1.5 px-2 py-0.5 rounded-md text-[10px] font-semibold bg-indigo-50 text-indigo-700">
              <Briefcase className="w-2.5 h-2.5" />
              {user.Role}
            </span>
          )}
        </div>

        {/* Actions */}
        <div className="flex flex-col gap-1 shrink-0">
          <button
            onClick={() => handleViewProfile(user.id)}
            className="p-1.5 text-gray-400 hover:text-indigo-600 hover:bg-indigo-50 rounded-lg transition-colors"
            title="View"
          >
            <Eye className="w-3.5 h-3.5" />
          </button>
          <button
            onClick={() => handleMessage(user.id)}
            className="p-1.5 text-gray-400 hover:text-emerald-600 hover:bg-emerald-50 rounded-lg transition-colors"
            title="Message"
          >
            <MessageCircle className="w-3.5 h-3.5" />
          </button>
          <button
            onClick={() => handleMoreOptions(user.id)}
            className="p-1.5 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-lg transition-colors"
            title="More"
          >
            <MoreVertical className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      {/* Footer Info */}
      <div className="px-4 pb-3 pt-0 flex items-center gap-3 border-t border-gray-50">
        {user.department && (
          <div className="flex items-center gap-1 text-[11px] text-gray-500">
            <Building2 className="w-3 h-3" />
            <span className="truncate">{user.department}</span>
          </div>
        )}
        {user.location && (
          <div className="flex items-center gap-1 text-[11px] text-gray-500">
            <MapPin className="w-3 h-3" />
            <span className="truncate">{user.location}</span>
          </div>
        )}
      </div>
    </div>
  ))}
</div>
    </div>
  );
};

export default Members;