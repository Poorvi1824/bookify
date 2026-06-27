"use client";

import AddClients from '@/app/component/clientscomponent/addClients';
import ClientTable from '@/app/component/clientscomponent/clientTable';


import Button from '@/app/component/uicomponents/button';
import { Search, UserPlus, Users } from 'lucide-react';
import { useState } from 'react';

const Clients = () => {
    const [status, setStatus] = useState('all');
    const [searchValue, setSearchValue] = useState('');
    const [isModalOpen, setIsModalOpen] = useState(false);

    const onStatusChange = (value) => {
        setStatus(value);
    };

    const onSearchChange = (value) => {
        setSearchValue(value);
    };

    return (
        <div className="m-6 rounded-lg bg-white p-6 shadow-md">
            <div className="mb-4 flex h-15 w-full items-center justify-between gap-4 px-6  pt-2">
                <div className="flex flex-col ">
                    <h1 className="text-2xl font-bold">Clients</h1>
                    <h3 className="mb-4 text-sm text-gray-400">Manage your customer base, your groups, your teams and access all the details of each customer.</h3>
                </div>

                <div className="flex gap-3">
                    <Button
                        variant="ouutline"
                        type="button"
                        leftIcon={Users}
                        className="py-2 px-3 font-light shadow-sm"
                    >
                        Manage group
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

                <AddClients isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
            </div>

            <div className="flex flex-wrap gap-3">
                <div className="relative flex w-full max-w-[320px]">
                    <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
                    <input
                        type="text"
                        value={searchValue}
                        onChange={(e) => onSearchChange(e.target.value)}
                        placeholder="Search..."
                        className="w-full rounded-lg border border-gray-300 bg-white py-2.5 pl-10 pr-4 text-sm placeholder:text-gray-400 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>

                <div className="relative">
                    <select
                        value={status}
                        onChange={(e) => onStatusChange(e.target.value)}
                        className="min-w-[140px] cursor-pointer appearance-none rounded-lg border border-gray-300 bg-white py-2.5 pl-4 pr-10 text-sm text-gray-700 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                        <option value="all">All status</option>
                        <option value="active">Active</option>
                        <option value="inactive">Inactive</option>
                    </select>
                </div>
            </div>

            <ClientTable searchValue={searchValue} status={status} />
        </div>
    );
};

export default Clients;