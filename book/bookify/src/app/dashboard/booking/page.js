"use client";


import react from 'react';
import Button from '@/app/component/uicomponents/button';
import { fetchStaff } from '@/app/redux/features/booking/StaffSlice';
import { Calendar, List, RefreshCcw, UserPlus, Users, CircleDollarSign, UserCheck } from 'lucide-react';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Fragment } from "react";
import React from 'react';

const Booking = () => {

    const dispatch = useDispatch();
const stafflist = useSelector((state) => state.staff.users);
const loading = useSelector((state) => state.staff.loading);
    console.log("Members from Redux:", stafflist);



    useEffect(() => {
        console.log("Dispatching staff...");
        try {
            dispatch(fetchStaff());
        }
        catch (error) { console.error("Error dispatching staff:", error); }

    }, [dispatch]);


    const blocks = [
        { name: "Total Bookings", icon: <UserCheck className="w-8 h-8 p-1 text-green-500" />, iconBg: "bg-green-100" },
        { name: "Checked In", icon: <CircleDollarSign className="w-8 h-8 p-1 text-black" />, iconBg: "bg-blue-100" },
        { name: "Occupancy Rate", icon: <Calendar className="w-8 h-8 p-1 text-purple-500" />, iconBg: "bg-purple-100", },
        { name: "No Shows", icon: <Users className="w-8 h-8 p-1 text-red-500" />, iconBg: "bg-red-100" },
    ];


    const now = new Date()
    const formattedDateTime = now.toLocaleString("en-US", {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
        hour: "2-digit",
        minute: "2-digit",
        hour12: true,
    });

const handleRefresh = async () => {
  try {
    await dispatch(fetchStaff());
    console.log("Staff list refreshed!");
  } catch (error) {
    console.error("Failed to refresh staff:", error);
  }
};



    return (<>
        <div className="m-6 rounded-lg bg-white p-6 shadow-md">
            <div className="flex w-full items-center justify-between px-6 py-4">
                <div className="flex flex-col">
                    <h1 className="text-2xl font-bold">Booking Dashboard</h1>
                    <p className="text-sm font-light text-gray-500">
                        {formattedDateTime}
                    </p>
                </div>
{/* button */}
                <div className="flex gap-3">
                    <Button
                        variant="dark"
                        leftIcon={RefreshCcw}
                        className="py-2 px-3 font-light shadow-sm"
                        onClick={handleRefresh}
                         iconClassName={loading ? "animate-spin" : ""}

                            
                    >
                        
                        Refresh
                    </Button>
                    
                    <Button
                        variant="dark"
                        leftIcon={Calendar}
                        className="py-2 px-3 font-light shadow-sm"
                        onClick={() => setIsModalOpen(true)}
                    >
                        View Calendar
                    </Button>
                    <Button
                        variant="ouutline"
                        type="button"
                        leftIcon={List}
                        className="py-2 px-3 font-light shadow-sm"
                    >
                        All booking
                    </Button>

                    <Button
                        variant="dark"
                        leftIcon={UserPlus}
                        className="bg-black py-2 px-3 font-light text-white shadow-sm"
                        onClick={() => setIsModalOpen(true)}
                    >
                        Add client
                    </Button>
                </div>

                {/* <AddClients isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} /> */}
            </div>

            <hr className="border-gray-300 mx-[-24]" />

            {/* secound section */}
            <div className=" p-6 w-full h-50 mt-10 ">


                <div className="w-full h-full gap-4 flex flex-row justify-between items-center">
                    {blocks.map((block, index) => (
                        <div key={index} className="h-30 flex-1 bg-white rounded-lg border border-gray-200 shadow-md p-4 flex flex-col justify-between">
                            <div className="flex items-center justify-between">
                                <div className="text-2xl  text-sm text-gray-500">{block.name}</div>


                                <span className={`w-10 h-10 flex rounded-lg items-center justify-center ${block.iconBg}`}>{block.icon}</span>

                            </div>
                            <div className="text-2xl font-semibold ">0</div>
                            <span className="text-sm text-gray-500">...</span>

                        </div>
                    ))}

                </div>
            </div>

            {/* Secondary Section */}

            <div className="flex  w-full my-3 gap-4 ">
                {/* Today's Classes Block */}

                <div className="w-[70%]  h-100 bg-white border border-gray-200 rounded-lg shadow-md text-lg font-bold mb-2">


                    <div className=" p-4 flex flex-col border-b border-b-gray-200 mb-2 ">
                        <h6 className=" text-25 font-light">Today's Classes</h6>
                        <span className="text-sm text-gray-500">0 classes scheduled for today</span>
                    </div>
                    {/* <div className="w-full  h-0 text-black mt-2 border-t border-t-gray-200"></div> */}

                    {/*classes sheduled for today*/}

                    <div className="p-4 m-4 flex flex-col items-center justify-center">
                        <Calendar className="w-10 h-10 text-gray-300 mb-2" />
                        <p className=" text-sm text-gray-600">No classes scheduled for today</p>
                    </div>

                </div>



                {/* Live Updates Block */}
                <div className='flex-1  h-100 bg-white border border-gray-200 rounded-lg shadow-md text-lg font-bold mb-2'>



                    <div className="flex flex-col boder-b border-b-gray-200 mb-2 p-4 ">
                        <span className="text-25 text-gray-800 ">Staff Today</span>
                        <span className="text-sm text-gray-500">Live updates from your gym</span>

                    </div>
                    <div className="w-full  h-0 text-black mt-2 border-t border-t-gray-200"></div>
{/* add skleton for refreshing */}
                   <div className="p-4">
  {loading ? (
    [...Array(5)].map((_, index) => (
      <div key={index}>
        <div className="flex items-center justify-between py-4 animate-pulse">
          {/* Left Side */}
          <div className="flex items-center gap-5">
            {/* Avatar Skeleton */}
            <div className="w-10 h-10 rounded-full bg-gray-200"></div>

            {/* Name & Profile Skeleton */}
            <div className="flex flex-col gap-2">
              <div className="h-4 w-28 rounded bg-gray-200"></div>
              <div className="h-3 w-20 rounded bg-gray-200"></div>
            </div>
          </div>

          {/* Right Side */}
          <div className="flex flex-col items-end gap-2">
            <div className="h-4 w-20 rounded bg-gray-200"></div>
            <div className="h-3 w-16 rounded bg-gray-200"></div>
          </div>
        </div>

        {index !== 4 && <hr className="border-gray-300" />}
      </div>
    ))
  ) : (
    stafflist.map((staff, index) => (
      <React.Fragment key={staff.id}>
        <div className="flex items-center justify-between py-4">
          {/* Left */}
          <div className="flex items-center gap-5">
            <div className="w-10 h-10 rounded-full bg-gray-300 flex items-center justify-center font-light text-sm">
              {staff.Name
                ?.trim()
                .split(" ")
                .filter(Boolean)
                .map((word) => word[0])
                .filter((_, i, arr) => i === 0 || i === arr.length - 1)
                .join("")
                .toUpperCase()}
            </div>

            <div className="flex flex-col">
              <span className="text-sm font-semibold">
                {staff.Name}
              </span>
              <span className="text-xs font-light text-gray-500">
                {staff.Profile}
              </span>
            </div>
          </div>

          {/* Right */}
          <div className="flex flex-col items-end">
            <span className="text-sm font-semibold">
              {staff.Classes} classes
            </span>
            <span className="text-xs text-black font-light">
              {staff.Clients} clients
            </span>
          </div>
        </div>

        {index !== stafflist.length - 1 && (
          <hr className="border-gray-300" />
        )}
      </React.Fragment>
    ))
  )}
</div>
                </div>
            </div>



        </div>
    </>)
}
export default Booking



//staff map simple

//   <div className="p-4">
                        

//                         {stafflist.map((staff,index) => {
//                             //   const { bg, text, icon } = getStatusConfig(member.Status);

//                             return (
                              
//                                  <React.Fragment key={staff.id}>
//     <div className="flex items-center justify-between py-4">
                                  
//                                     <div className="flex items-center gap-5">
//                                         <div
//                                             className={`w-10 h-10 p-2 rounded-full flex items-center text-sm justify-center bg-gray-300 font-light text-black `}
//                                         >
//                                             {staff.Name
//                                                 ?.trim()
//                                                 .split(" ")
//                                                 .filter(Boolean)
//                                                 .map((word) => word[0])
//                                                 .filter((_, index, arr) => index === 0 || index === arr.length - 1)
//                                                 .join("")
//                                                 .toUpperCase()}
//                                         </div>
//                                         {/* name &profile */}
//                                         <div className="flex flex-col">
//                                             <span className=" text-sm text-black font-semibold">{staff.Name}</span>
//                                             <span className="text-12 font-light text-black font-extralight ">
//                                                 {staff.Profile}
//                                             </span>
//                                         </div> </div>
//                                         {/* classes & clients */}

//                                          <div className="flex flex-col">
//                                             <span className=" text-sm text-black font-semibold">{staff.Classes}  Classes</span>
//                                             <span className="text-12 font-light text-black font-extralight ">
//                                                 {staff.Clients}  Clients
//                                             </span>
                                           
//                                             </div>
                                           
                                   
//                                 </div>
                                  
//     { index !== stafflist.length - 1 && (
//       <hr className="border-gray-300" />
//     )}
//   </React.Fragment>
//                             );
//                         })}
//                     </div>
