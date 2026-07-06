"use client";

import react, { useEffect } from "react";

import { useMemo, useState } from "react";
import {
  MoreVertical,
  ChevronUp,
  ChevronDown,
} from "lucide-react";

const TransactionTable = ({ filters }) => {

const [sortConfig, setSortConfig] = useState({
  key: "",
  direction: "asc",
});

const [currentPage, setCurrentPage] = useState(1);

const rowsPerPage = 5;



    const transactions = [
  {
    id: "0AAB1CBA...",
    user: "Monikaa Mishra",
    item: "Package",
    itemColor: "purple",
    amount: "QAR 900.00",
    method: "Gateway",
    gateway: "Stripe",
    status: "Success",
    createdBy: "CLIENT...",
    date: "Jun 2, 2026, 02:31 PM",
  },
  {
    id: "NULL...",
    user: "Monikaa Mishra",
    item: "Package",
    itemColor: "purple",
    amount: "QAR 900.00",
    method: "Gateway",
    gateway: "Stripe",
    status: "Pending",
    createdBy: "CLIENT...",
    date: "Jun 2, 2026, 02:29 PM",
  },
  {
    id: "2A19D31B...",
    user: "Monikaa Mishra",
    item: "Package",
    itemColor: "purple",
    amount: "QAR 1800.00",
    method: "Gateway",
    gateway: "Stripe",
    status: "Success",
    createdBy: "CLIENT...",
    date: "May 29, 2026, 05:39 PM",
  },
  {
    id: "991B5431...",
    user: "Monikaa Mishra",
    item: "Wallet",
    itemColor: "blue",
    amount: "QAR 100.00",
    method: "Gateway",
    gateway: "Stripe",
    status: "Success",
    createdBy: "CLIENT...",
    date: "May 27, 2026, 05:30 PM",
  },
  {
    id: "NULL...",
    user: "Monikaa Mishra",
    item: "Package",
    itemColor: "purple",
    amount: "QAR 900.00",
    method: "Gateway",
    gateway: "Stripe",
    status: "Pending",
    createdBy: "CLIENT...",
    date: "May 27, 2026, 03:12 PM",
  },
];















                     
    return(<>
    <div className="mt-6 overflow-hidden rounded-2xl border border-gray-200 bg-white">
      <table className="w-full border-collapse">
        <thead className="bg-gray-50">
          <tr className="text-left text-12 text-gray-500">
            <th className="px-6 py-4 font-medium">Order ID</th>
            <th className="px-6 py-4 font-medium">User</th>
            <th className="px-2 py-4 font-medium">Item purchased</th>
            <th className="px-6 py-4 font-medium">Amount</th>
            <th className="px-6 py-4 font-medium">Method</th>
            <th className="px-6 py-4 font-medium">Gateway</th>
            <th className="px-6 py-4 font-medium">Status</th>
            <th className="px-6 py-4 font-medium">Created by</th>
            <th className="px-6 py-4 font-medium">Date</th>
            <th className="px-6 py-4 font-medium text-center">Action</th>
          </tr>
        </thead>

        <tbody>
          {transactions.map((item, index) => (
            <tr
              key={index}
              className="border-t border-gray-100 hover:bg-gray-50 transition"
            >
              <td className="px-6 py-5 text-14 text-gray-600">
                {item.id}
              </td>

              <td className="px-6 py-5">
                <p className="font-semibold text-14 text-gray-900">
                  {item.user}
                </p>
              </td>

              <td className="px-6 py-5">
                <span
                  className={`inline-flex rounded-lg border px-3 py-1 text-xs font-medium ${
                    item.itemColor === "purple"
                      ? "border-purple-200 bg-purple-50 text-purple-700"
                      : "border-blue-200 bg-blue-50 text-blue-700"
                  }`}
                >
                  {item.item}
                </span>
              </td>

              <td className="px-6 py-5 font-semibold text-14 text-gray-900">
                {item.amount}
              </td>

              <td className="px-6 py-5 text-14 text-gray-700">
                {item.method}
              </td>

              <td className="px-6 py-5 font-medium">
                {item.gateway}
              </td>

              <td className="px-6 py-5">
                <span
                  className={`inline-flex rounded-lg border px-3 py-1 text-xs font-medium ${
                    item.status === "Success"
                      ? "border-green-200 bg-green-50 text-green-700"
                      : "border-yellow-200 bg-yellow-50 text-yellow-700"
                  }`}
                >
                  {item.status}
                </span>
              </td>

              <td className="px-6 py-5 text-14 text-gray-600">
                {item.createdBy}
              </td>

              <td className="px-6 py-5 font-medium text-gray-800  text-14 whitespace-nowrap">
                {item.date}
              </td>

              <td className="px-6 py-5 text-center">
                <button className="rounded-lg p-1 hover:bg-gray-100">
                  <MoreVertical size={18} className="text-gray-500" />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div></>)
};

export default TransactionTable;