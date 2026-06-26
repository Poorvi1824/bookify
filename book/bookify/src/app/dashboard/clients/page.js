"use client"

import Button from '@/app/component/uicomponents/button';
import { Search, UserPlus, Users } from 'lucide-react';
import react from 'react';
import { useEffect, useState } from 'react';

const Clients = () => {

    const [status, setStatus] = useState('all');

    const onStatusChange = (e) => {

        setStatus(e)


    }


    return (
        <div className="p-6 m-6 bg-white rounded-lg shadow-md">

            {/* first row heading & button  */}
            <div className="w-full flex justify-between items-center h-15  pt-2 px-6 mb-4 gap-4">
                <div className=" flex flex-col  items center">
                    <h1 className="text-2xl font-bold ">Clients</h1>
                    <h3 className="text-sm text-gray-500 mb-4">Manage your customer base, your groups, your teams and access all the details of each customer.</h3>
                </div>
                {/* button */}
                <div className="flex gap-3 ">
                    {/* White "Manage group" button */}
                    <Button
                        variant="ouutline"
                        type="button"
                        leftIcon={Users}

                        className="shadow-sm   font-light font-15px py-2 px-3"

                    >
                        Manage group
                    </Button>

                    {/* Black "Add client" button */}
                    <Button
                        variant="dark"
                        leftIcon={UserPlus}

                        className="shadow-sm bg-black font-light text-white font-15px py-2 px-3"

                    >
                        Add client
                    </Button>
                </div>

            </div>

            {/* secound row :searchbar & dropdown */}
            <div className='flex'>
                <div className="relative flex w-95">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400 pointer-events-none" />
                    <input
                        type="text"
                        //   value={searchValue}
                        onChange={(e) => onSearchChange(e.target.value)}
                        placeholder="Search..."
                        className="w-90 pl-10 pr-4 py-2.5 text-sm border border-gray-300 rounded-lg 
                     focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent
                     placeholder:text-darkgray placeholder:font-light  placeholder:font-sm placeholder:trancute-light   bg-white"
                    />
                </div>

                {/* Status Dropdown */}
                <div className="relative">
                    <select
                        value={status}
                        onChange={(e) => onStatusChange(e.target.value)}
                        className="appearance-none pl-4 pr-10 py-2.5 text-sm border border-gray-300 rounded-lg 
                     focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent
                     bg-white text-gray-700 cursor-pointer min-w-[140px]"
                    >
                        <option value="all">All status</option>
                        <option value="active">Active</option>
                        <option value="inactive">Inactive</option>
                    </select></div>

            </div>


        </div>
    )
}
export default Clients