"use client";

import {
  Package,
  Pencil,
  Trash2,
} from "lucide-react";
import Button from "../uicomponents/button";
import { useRouter } from "next/navigation";

export default function PackagesCard({
  id,
  packageName,
  packageType,
  validity,
  createdAt,
  onEdit,
  onDelete,
}) {

  const router=useRouter();
  return (
    <div className="bg-white mb-3 rounded-2xl border border-gray-200 shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden">
      {/* Card Body */}
      <div className="p-6">
        {/* Header */}
        <div className="flex items-start gap-4">
          <div className="w-8 h-8 rounded-2xl bg-gray-100 flex items-center justify-center">
            <Package className="w-5 h-5 text-gray-700" />
          </div>

          <div className="mb-6">
            <h2 className="text-xl font-bold text-slate-900 ">
              {packageName}
            </h2>

            <p className="text-gray-500 text-sm font-light">
              {packageType}
            </p>
          </div>
        </div>

        {/* Divider
        <div className="border-t my-8"></div> */}

        {/* Details */}
        <div className="space-y-5 mt-6">

          <div className="flex justify-between">
            <span className="text-gray-500 text-sm font-light">
              Validity
            </span>

            <span className="font-semibold text-gray-900 text-sm ">
              {validity}
            </span>
          </div>

          <div className="flex justify-between">
            <span className="text-gray-500 text-sm font-light">
              Created
            </span>

            <span className="font-semibold text-gray-900 text-sm">
              {createdAt}
            </span>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className=" p-2 flex gap-3 mt-3 mb-2">
        <Button
            variant="noVariant"
            leftIcon={Pencil}
            className="w-full my-[-5px] px-3 font-light text-black shadow-sm hover:bg-gray-50"
         onClick={()=>{router.push(`/dashboard/packages/${id}`)}} >
          Edit
        </Button>

        <Button
          onClick={onDelete}
          className="w-12 h-12 rounded-xl border border-gray-300 bg-white cursor hover:bg-red-50 text-red-600 flex items-center justify-center transition"
        >
          <Trash2 size={12} color={"red"} />
        </Button>
      </div>
    </div>
  );
}