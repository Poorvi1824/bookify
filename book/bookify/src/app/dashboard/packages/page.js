"use client"


import PackagesCard from "@/app/component/packageComponent/packagecard"
import Button from "@/app/component/uicomponents/button"
import { fetchPackages } from "@/app/redux/features/packages/pacakgesSlice"
import { Plus } from "lucide-react"
import { useRouter } from "next/navigation"
import react from "react"
import { useState, useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"

const Packages = () => {
  
 const router = useRouter();
 
  const[basicInfoOpen,setBasicInfoOpen]=useState(false)

  const dispatch = useDispatch()

  const { packages, loading, error } = useSelector(
    (state) => state.packages
  );

   useEffect(() => {
    dispatch(fetchPackages());
  }, [dispatch]);





  return (<>

   <div className="m-6 rounded-lg bg-gray-50  bg-white p-6 shadow-md flex flex-col gap-8">
      {/* Header */}
  <div className="flex items-center justify-between rounded-lg px-6 py-4">
        <div className="flex flex-col">
          <h1 className="text-2xl font-bold">Subscription Packages</h1>
          <p className="text-sm text-gray-500">
            Manage your membership packages and pricing
          </p>
        </div>

        <div className="flex gap-3">
          <Button
            variant="dark"
            leftIcon={Plus}
            className="bg-black py-2 px-3 font-light text-white shadow-sm"
         onClick={() => router.push("/dashboard/packages/create")}
          >
            Create Packages
          </Button>
        </div>


      </div>


      {/* card */}

      <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {packages.map((item) => (
          <PackagesCard
            key={item.id}
            packageName={item.type}
            validity={`${item.validity}`}
            createdAt={item.created}
            onEdit={() => setBasicInfoOpen(true)}
            // onDelete={() => handleDelete(item.id)}
          />
        ))}
      </div>


 

    </div>

   
  </>)
}
export default Packages