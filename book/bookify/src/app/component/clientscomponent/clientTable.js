"use client";

import { Eye, Pencil } from "lucide-react";
import { useEffect, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchClients } from "@/app/redux/features/clients/clientsSlice";

const ClientTable = ({ searchValue = "", status = "all" }) => {
    const dispatch = useDispatch();
    const { clients = [], loading = false } = useSelector((state) => state.clients || {});

    useEffect(() => {
        dispatch(fetchClients());
    }, [dispatch]);

    const filteredClients = useMemo(() => {
        const normalizedSearch = searchValue.trim().toLowerCase();

        return clients.filter((client) => {
            const fullName = `${client.firstName || ""} ${client.lastName || ""}`.trim().toLowerCase();
            const group = (client.group || "").toLowerCase();
            const phone = (client.phoneNumber || "").toLowerCase();
            const statusValue = (client.status || "Active").toLowerCase();
            const matchesSearch =
                normalizedSearch.length === 0 ||
                fullName.includes(normalizedSearch) ||
                group.includes(normalizedSearch) ||
                phone.includes(normalizedSearch);

            const matchesStatus =
                status === "all" || statusValue === status.toLowerCase();

            return matchesSearch && matchesStatus;
        });
    }, [clients, searchValue, status]);

    const formatDate = (value) => {
        if (!value) return "—";

        const date = new Date(value);
        if (Number.isNaN(date.getTime())) return value;

        return date.toLocaleDateString("en-US", {
            year: "numeric",
            month: "short",
            day: "numeric",
        });
    };

    const getStatusStyles = (value) => {
        const normalized = (value || "Active").toLowerCase();

        if (normalized === "inactive") {
            return "bg-red-100 text-red-700";
        }

        return "bg-green-100 text-green-700";
    };

    return (
        <div className="mt-6 overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm">
            <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200 text-sm">
                    <thead className="bg-gray-50 text-left text-xs font-semibold uppercase tracking-wide text-gray-500">
                        <tr>
                            <th className="px-4 py-3">Client name</th>
                            <th className="px-4 py-3">Group</th>
                            <th className="px-4 py-3">DOB</th>
                            <th className="px-4 py-3">Gender</th>
                            <th className="px-4 py-3">Phone number</th>
                            <th className="px-4 py-3">Status</th>
                            <th className="px-4 py-3">Action</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100 bg-white">
                        {loading ? (
                            <tr>
                                <td colSpan="7" className="px-4 py-8 text-center text-gray-500">
                                    Loading clients...
                                </td>
                            </tr>
                        ) : filteredClients.length > 0 ? (
                            filteredClients.map((client) => (
                                <tr key={client.id} className="hover:bg-gray-50">
                                    <td className="px-4 py-3 font-medium text-gray-900">
                                        <div className="flex flex-col">
                                            <span className="font-medium text-gray-900">
                                                {`${client.firstName || ""} ${client.lastName || ""}`.trim() ||
                                                    "Unnamed Client"}
                                            </span>

                                            <span className="text-sm text-gray-400 text-light">
                                                {client.email || "No email"}
                                            </span>
                                        </div>
                                    </td>
                                    <td className="px-4 py-3 text-gray-600">{client.group || "—"}</td>
                                    <td className="px-4 py-3 text-gray-600">{formatDate(client.dob)}</td>
                                    <td className="px-4 py-3 text-gray-600">{client.gender || "—"}</td>
                                    <td className="px-4 py-3 text-gray-600">{client.phoneNumber || "—"}</td>
                                    <td className="px-4 py-3">
                                        <span className={`inline-flex rounded-full px-2.5 py-1 text-xs font-semibold ${getStatusStyles(client.status)}`}>
                                            {client.status || "Active"}
                                        </span>
                                    </td>
                                    <td className="px-4 py-3">
                                        <div className="flex items-center gap-2">
                                            <button
                                                type="button"
                                                className="rounded-full border border-gray-200 p-2 text-gray-600 transition hover:border-blue-500 hover:text-blue-600"
                                                title="View client"
                                            >
                                                <Eye size={16} />
                                            </button>
                                            <button
                                                type="button"
                                                className="rounded-full border border-gray-200 p-2 text-gray-600 transition hover:border-blue-500 hover:text-blue-600"
                                                title="Edit client"
                                            >
                                                <Pencil size={16} />
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan="7" className="px-4 py-8 text-center text-gray-500">
                                    No clients found for the current filters.
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ClientTable;
