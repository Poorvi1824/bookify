"use client"

import { useState } from 'react';
import { ChevronDown, Calendar, Divide } from 'lucide-react'; // or any icon library

const days = [
  { name: "Today", value: 0 },
  { name: "This Week", value: 1 },
  { name: "This Month", value: 2 }
];

const  blocks=[
   { name: "Check-ins Today" },
   { name: "Today's Revenue" },
   {name: "Classes Today"},
   {name: "New Signups"},
]

const OverviewDashboard = () => {
  const [selectedDay, setSelectedDay] = useState(days[0]);
  const [selectedDate, setSelectedDate] = useState(new Date().toISOString().split('T')[0]);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="flex w-full h-30 py-3 items-center justify-between">
        <div className="flex flex-col text-xl font-bold">
          <h1>Overview</h1>
          <span className="text-sm text-gray-500">Here's what's happening at your gym today.</span>
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
                    className={`w-full text-left px-4 py-2 text-sm hover:bg-gray-100 first:rounded-t-lg last:rounded-b-lg ${
                      selectedDay.value === day.value ? 'text-black font-medium' : 'text-gray-600'
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
 <div className="  w-full h-40">
 
                
                <div className="w-full h-full  flex flex-row justify-between items-center">
{blocks.map((block, index) => (
  <div key={index} className="w-30 h-30 flex-1 bg-white rounded-lg shadow-md p-4 m-2">
    {block.name}
  </div>
))}

</div>


            </div>
            <div className="flex w-full  bg-white rounded-lg shadow-md p-4 ">secondary</div>
        </>




    )
}

export default OverviewDashboard;