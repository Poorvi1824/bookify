"use client";

import { useState } from "react";
import { useDispatch } from "react-redux";
import Input from "../uicomponents/input";
import Select from "../uicomponents/select";
import Button from "../uicomponents/button";
import { createClient } from "@/app/redux/features/clients/clientsSlice";
import { toast } from "react-toastify";

const AddClients = ({ isOpen, onClose }) => {
    const dispatch = useDispatch();

    const [form, setForm] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        gender: "",
        dob: "",
        phoneNumber: "",
        group: "",
        status: "Active",
    });


    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        await dispatch(createClient(form));
       setForm({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    gender: "",
    dob: "",
    phoneNumber: "",
    group: "",
    status: "Active",
});
        onClose();
        toast.success("Client Added Successfully")
        
    };

    const handleClose = () => {
        setForm({
            clientName: "",
            group: "",
            dob: "",
            gender: "",
            phoneNumber: "",
            status: "Active",
        });
        onClose();
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
            {/* Backdrop */}
            <div
                className="absolute inset-0 "
                onClick={handleClose}
            />

            {/* Modal Content */}
            <div className="relative bg-white rounded-2xl shadow-2xl w-full max-w-4xl mx-4 p-8 max-h-[90vh] overflow-y-auto">
                {/* Close Button */}
                <button
                    onClick={handleClose}
                    className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 text-xl"
                >
                    ✕
                </button>
                <div className="flex flex-col justify-start">
                    <h2 className="text-xl font-semibold text-darkgray ">
                        Create New Client
                    </h2>
                    <h6 className="text-sm font-light text-gray-400 mb-4">Fill in the details below to add a new client.</h6>
                </div>
                <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-6">

                    {/* First Name */}
                    <div>

                        <Input
                            label="First Name"
                            name="firstName"
                            value={form.firstName}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    {/* Last Name */}
                    <div>
                        <Input
                            label="Last Name"
                            name="lastName"
                            value={form.lastName}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    {/* Email */}
                    <div>
                        <Input
                            label="Email"
                            type="email"
                            name="email"
                            value={form.email}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    {/* Password */}
                    <div>
                        <Input
                            label="Password"
                            type="password"
                            name="password"
                            value={form.password}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    {/* Gender */}
                    <div>
                        <Select
                            label="Gender"
                            name="gender"
                            value={form.gender}
                            onChange={handleChange}
                            required
                            options={[
                                { value: "Male", label: "Male" },
                                { value: "Female", label: "Female" },
                                { value: "Other", label: "Other" },
                            ]}
                        />
                    </div>

                    {/* DOB */}
                    <div>
                       <Input
                            label="Date Of Birth"
                            type="date"
                            name="dob"
                            value={form.dob}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    {/* Phone */}
                    <div>
                       
                         <Input
                            label="Phone Number"
                            type="tel"
                            name="phoneNumber"
                            value={form.phoneNumber}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    {/* Group */}
                    <div>
                        
                         <Input
                            label="Group"
                          type="text"
                            name="group"
                            value={form.group}
                            onChange={handleChange}
                        />
                        
                    </div>

                    {/* Status
                    <div>
                        <label className="text-sm font-medium">Status</label>
                        <select
                            name="status"
                            value={form.status}
                            onChange={handleChange}
                            className="mt-1 w-full border rounded-lg p-3"
                        >
                            <option>Active</option>
                            <option>Inactive</option>
                        </select>
                    </div> */}

                    {/* Buttons */}
                    <div className="md:col-span-2 flex justify-end gap-4 pt-4">

                       

                        <Button
                            type="submit"
                            variant="secondary"
                            size="sm"
                            
                            
                        >
                          Create
                        </Button>

                    </div>

                </form>
            </div>
        </div>
    );
};

export default AddClients;