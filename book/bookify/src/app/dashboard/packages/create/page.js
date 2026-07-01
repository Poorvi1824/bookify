"use client"

import { Info } from "lucide-react";
import react from "react"
import { useState, useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"


const Create = () => {
  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="flex flex-col gap-1">
        <p className="text-2xl font-bold">Create New Package</p>
        <p className="text-sm text-gray-500">
          Configure your subscription package details
        </p>
      </div>
      
      {/* basic details heading */}
      <div className="flex items-center gap-2 my-5 border-b pb-3">
  <Info size={18} className="text-gray-600" />
  <p className="text-sm font-semibold text-gray-800">
    Basic Details
  </p>
</div>
    </div>
  );
};
export default Create