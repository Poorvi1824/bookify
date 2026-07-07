"use client"

import DraftClasses from "@/app/component/classesComponent/draftClasses"
import PastClasses from "@/app/component/classesComponent/pastClasses"
import ScheduledClasses from "@/app/component/classesComponent/scheduledClasses"
import UpcomingClasses from "@/app/component/classesComponent/upcomingClasses"
import Button from "@/app/component/uicomponents/button"
import { Plus } from "lucide-react"
import react, { useState } from "react"

const Classes = () => {
    const [active, setActive] = useState("Draft Classes");



    const menuItems = [
    { name: "Draft Classes", component: <DraftClasses/> },
    { name: "Upcoming Classes", component:<UpcomingClasses/>},
    { name: "Past Classes", component: <PastClasses/>},
{ name: "Scheduled Classes", component: <ScheduledClasses/> },
  ]
 const activeComponent = menuItems.find(item => item.name === active)?.component;
    return (<>

        <div className=" p-6 m-auto bg-white rounded-lg shadow-md">

            <div className=" flex  gap-4">
                <div className=" flex gap-4 items center justify-center">
                    <h1 className="text-2xl font-bold ">Class Management </h1>
                    <Button className="bg-black text-white text-15 px-1  rounded-lg  py-0"
                        rightIcon={Plus}
                    >

                        Create New Class
                    </Button></div></div>
                    
                    
                    
                     {/* Bottom Row: Empty or other content */}
        <div className="w-full h-20 flex items-center gap-2 px-6 border-b border-gray-200">
          {menuItems.map((item) => (
            <button
              key={item.name}
              onClick={() =>{ setActive(item.name)

               

              }}
              className={`h-full px-4 text-lg flex items-center justify-center font-semibold hover:text-black ${active === item.name
                  ? 'text-black border-b-2 border-black'
                  : 'text-gray-500 border-b-2 border-transparent'
                }`}
            >
              {item.name}
            </button>
          ))}
        </div>
                    
                    
                 {/* Body of the  pages */}
      <div className="w-full py-10 px-10">
        {activeComponent}
      </div>    
                    
                    
                    </div>




    </>)
}

export default Classes