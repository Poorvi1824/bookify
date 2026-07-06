"use client"

import FilterToolbar from "@/app/component/filterToolBar/fillterToolbar";
import TransactionTable from "@/app/component/transactionCopmonent/transactionTable";
import { Search } from "lucide-react";
import react, { useState } from "react";


export const transactionColumns = [
  {
    accessorKey: "id",
    header: "Order ID",
  },
  {
    accessorKey: "user",
    header: "User",
  },
  {
    accessorKey: "status",
    header: "Status",
    cell: ({ row }) => (
      <StatusBadge status={row.original.status} />
    ),
  },
];

const Transactions = () => {


  

const [filters, setFilters] = useState({
    status: "all",
    paymentMethod: "all",
    source: "all",
    gateway: "all",
    search: "",
});




  return (<>

    <div className="  p-6  bg-white rounded-lg shadow-md">

      <div className=" flex flex-col  h-15  pt-2 px-3 mb-4 gap-4">
        <div className=" flex gap-4  items center">
          <h1 className="text-xl font-bold mb-4">Transactions</h1>
        </div>
        </div>
        
<div className=" w-full  flex gap-1 mt-2">
  
  <FilterToolbar
      filters={filters}
      setFilters={setFilters}
    />
    </div>
     
   <div className="relative mt-6">
  <Search
    size={18}
    className="absolute left-3 inset-y-0 my-auto text-gray-400"
  />

  <input
    type="text"
    placeholder="Search..."
    className="w-[300px] border border-gray-300 rounded-lg pl-10 pr-3 py-2"
  />
</div>

<TransactionTable filters={filters} />

    </div>










  </>)

}
export default Transactions