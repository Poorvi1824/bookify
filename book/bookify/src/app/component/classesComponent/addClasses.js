"use client";

import { useState } from "react";
import { useDispatch } from "react-redux";
import Input from "../uicomponents/input";
import Select from "../uicomponents/select";
import Button from "../uicomponents/button";
import { createClient } from "@/app/redux/features/clients/clientsSlice";
import { toast } from "react-toastify";

const AddClasses = ({ isOpen, onClose }) => {
    const dispatch = useDispatch();

    const [form, setForm] = useState({
        firstName: "",
        lastName: "",
        email: "",
        Status: "",
        gender: "",
        dob: "",
        StartTime: "",
        EndTime: "",
        status: "",
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
    Program: "",
    Title: "",
    Trainer: "",
    ThemeName: "",
    ClassDate:"",
    gender: "",
    PriceType: "",
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
        <div className="fixed inset-0 z-50 flex items-center justify-center shadow-sm">
            {/* Backdrop */}
            <div
              className="absolute inset-0 bg-black/50 backdrop-blur-[3px] transition-all duration-300"
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
                        Create New Classes
                    </h2>
                    <h6 className="text-sm font-light text-gray-400 mb-4">Fill in the details below to add a new class to your schedule.</h6>
                </div>
                <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-6">


                    {/* select program */}
                   <div>
                        <Select
                            label="Training Program"
                            name="Training Program"
                            value={form.Program}
                            onChange={handleChange}
                            required
                            options={[
                                { value: "CYCLE", label: "CYCLE" },
                                { value: "RACK", label: "RACK" },
                                { value: "ASSESSMENT", label: "ASSESSMENT" },
                            ]}
                        />
                    </div>

<div></div>
                    {/* select trainer */}
                     <div>
                        <Select
                            label="Trainer"
                            name="Trainer"
                            value={form.Trainer}
                            onChange={handleChange}
                            required
                            options={[
                                { value: "CYCLE", label: "CYCLE" },
                                { value: "RACK", label: "RACK" },
                                { value: "ASSESSMENT", label: "ASSESSMENT" },
                            ]}
                        />
                    </div>
{/* Theme Name */}

 <div>
                        <Input
                            label="Theme Name"
                            type="text"
                            name="Theme Name"
                            value={form.ThemeName}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    {/* ClassTitle */}
                    <div>
                        <Input
                            label="Class Title"
                            type="text"
                            name="Class Title"
                            value={form.Title}
                            onChange={handleChange}
                            required
                        />
                    </div>

                     {/* Class Date */}
                    <div>
                        <Input
                            label="ClassDate"
                            type="date"
                            name="Class Date"
                            value={form.ClassDate}
                            onChange={handleChange}
                            required
                        />
                    </div>

                     {/* Start Time */}
                    <div>
                        <Input
                            label="Start Time"
                            type="time"
                            name="StartTime"
                            value={form.StartTime}
                            onChange={handleChange}
                            required
                        />
                    </div>


{/* end Time */}
                    <div>
                        <Input
                            label="End Time"
                            type="time"
                            name="EndTime"
                            value={form.EndTime}
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

                    {/* Status */}
                    <div>
                        <Select
                            label="Status"
                            name="Status"
                            value={form.Status}
                            onChange={handleChange}
                            required
                            options={[
                                { value: "Draft", label: "Draft" },
                                { value: "Published", label: "Published" },
                               
                            ]}
                        />
                    </div>


                     {/* Price package */}
                    <div>
                        <Select
                            label="Price Type"
                            name="PriceType"
                            value={form.PriceType}
                            onChange={handleChange}
                            required
                            options={[
                                { value: "Paid", label: "Paid" },
                                { value: "Free", label: "Free" },
                                { value: "Packages", label: "Packages" },
                            ]}
                        />
                    </div>
                   {/* Show Price Input only when Price Type is Paid */}
                   {form.PriceType === "Paid" && (
                              <div>
                        <Input
                            label="Price"
                            type="number"
                            name="Price"
                            value={form.Price}
                            onChange={handleChange}
                            required
                           
                        />
                    </div>
                   ) }

                   
                   

                   

                   
                    
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

export default AddClasses;