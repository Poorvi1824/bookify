"use client"

import react, { useEffect, useState } from "react";
import { ChevronDown, Calendar, CircleDollarSign, UserCheck,  TrendingUp, Package, Wallet } from 'lucide-react';

const SalesAnalytics = () => {


    const days = [
  { name: "Today", value: 0 },
  { name: "This Week", value: 1 },
  { name: "This Month", value: 2 }
];
    const blocks = [
  { name: "Total Revenue", icon: <UserCheck className="w-8 h-8 p-1 text-blue-500" />, iconBg: "bg-blue-100" },
  { name: "Packages Sold", icon: <Package className="w-8 h-8 p-1 text-green-600" />, iconBg: "bg-green-100" },
  { name: "Wallet Recharges", icon: <Wallet className="w-8 h-8 p-1 text-purple-500" />, iconBg: "bg-purple-100", },
  { name: "Avg. Daily Revenue", icon: <TrendingUp className="w-8 h-8 p-1 text-red-500" />, iconBg: "bg-red-100" },
];

     const [selectedDay, setSelectedDay] = useState(days[0]);
      const [selectedDate, setSelectedDate] = useState(new Date().toISOString().split('T')[0]);
      const [isOpen, setIsOpen] = useState(false);



    return(<>
    
    
     <div className="flex w-full h-30 py-1  flex flex-col">

      <div className="flex w-full justify-between items-center mb-4">
        <div className="flex flex-col text-xl font-bold">
          <h1>Sales Analytics</h1>
          <span className="text-sm text-gray-400 font-light">Track revenue, transactions, and sales performance.</span>
       
        </div>
        
          <div className="flex items-center gap-3">
        
                  {/* Custom Dropdown */}
                  <div className="relative">
                    <button
                      onClick={() => setIsOpen(!isOpen)}
                      className="flex items-center gap-2 bg-white border border-gray-300 rounded-lg px-4 py-2 text-sm text-gray-700 hover:bg-gray-50"
                    >
                      {selectedDay.name}
                      <ChevronDown className="w-4 h-4" />
                    </button>
        
                    {isOpen && (
                      <div className="absolute top-full mt-1 right-0 left-0 w-30 bg-white border border-gray-200 rounded-lg shadow-lg z-10">
                        {days.map((day) => (
                          <button
                            key={day.value}
                            onClick={() => {
                              setSelectedDay(day);
                              setIsOpen(false);
                            }}
                            className={`w-full text-left px-4 py-2 text-sm hover:bg-gray-100 first:rounded-t-lg last:rounded-b-lg ${selectedDay.value === day.value ? 'text-black font-medium' : 'text-gray-600'
                              }`}
                          >
                            {day.name}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
        
                  {/* Calendar Input */}
                  <div className="relative flex items-center">
                    <Calendar className="absolute left-3 w-4 h-4 text-gray-500" />
                    <input
                      type="date"
                      value={selectedDate}
                      onChange={(e) => setSelectedDate(e.target.value)}
                      className="bg-white border border-gray-300 rounded-lg pl-10 pr-4 py-2 text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-black cursor-pointer"
                    />
                  </div>
        
                </div>
             
         </div>
        
              {/* Blocks Section */}
              <div className="  w-full h-50 py-2 m-auto">
        
        
                <div className="w-full h-full gap-4 flex flex-row justify-between items-center">
                  {blocks.map((block, index) => (
                    <div key={index} className="h-40 flex-1 bg-white rounded-lg shadow-md p-4 flex flex-col justify-between">
                      <div className="flex items-center justify-between">
                        <span className={`w-10 h-10 flex rounded-lg items-center justify-center ${block.iconBg}`}>{block.icon}</span>
                        <span className="text-sm text-gray-500">...</span>
        
                      </div>
                      <div className="text-2xl  text-sm text-gray-400">{block.name}</div>
                      <div className="text-2xl font-semibold ">QR0</div>
                      
        
                    </div>
                  ))}
        
                </div>
              </div>
        
        
        {/* Secondary Section */}

      <div className="flex  w-full my-3 gap-4 ">
        {/* Today's Classes Block */}

        <div className="w-[70%]  h-100 bg-white rounded-lg shadow-md text-lg font-bold mb-2">


          <div className=" p-4 flex flex-col border-b border-b-gray-200 mb-2 ">
            <h6 className=" text-25 font-light">Revenue Trend</h6>
            <span className="text-sm text-gray-500">Daily revenue over selected period</span>
          </div>
          {/* <div className="w-full  h-0 text-black mt-2 border-t border-t-gray-200"></div> */}

          {/*classes sheduled for today*/}

          <div className="p-4 m-4 flex flex-col items-center justify-center">
            <Calendar className="w-10 h-10 text-gray-300 mb-2" />
            <p className=" text-sm text-gray-600">No classes scheduled for today</p>
          </div>

        </div>



        {/* Live Updates Block */}
        <div className='flex-1  h-100 bg-white rounded-lg shadow-md text-lg font-bold mb-2'>



          <div className="flex flex-col boder-b border-b-gray-200 mb-2 p-4 ">
            <span className="text-25 text-gray-800 ">Payment Gateways</span>
            <span className="text-sm text-gray-500">Sales by payment method</span>

          </div>
          <div className="w-full  h-0 text-black mt-2 border-t border-t-gray-200"></div>

          <div className="p-4">

            {/* {memberlist.map((member) => {
              const { bg, text, icon } = getStatusConfig(member.Status);

              return (
                <div key={member.id} className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-5">
                    <div
                      className={`w-8 h-8 rounded-full flex items-center justify-center ${bg}`}
                    >
                      {icon}
                    </div>

                    <div className="flex flex-col">
                      <span className=" text-sm text-gray-600">{member.memberName}</span>
                      <span className="text-sm font-light text-gray-400 ">
                        {member.Status}
                      </span>
                    </div>
                  </div>
                </div>
              );
            })} */}
          </div>
        </div>
     
        
        
     </div>
    
    
    </div>
    
    
    
    
    
    
    </>)
}
export default SalesAnalytics;
