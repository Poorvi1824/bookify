"use client";


import react, { useEffect, useState } from "react";
import Input from "@/app/component/uicomponents/input";
import Select from "@/app/component/uicomponents/select";
import Textarea from "@/app/component/uicomponents/textarea";

import { CircleArrowLeft, Plus } from "lucide-react";
import { useParams, useRouter } from "next/navigation";

import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import Button from "@/app/component/uicomponents/button";
import { getPackageById, updatePackage } from "@/app/services/packagesServices";

const EditPackages = () => {

    const [feature, setFeature] = useState("");
    const [timeRestriction, setTimeRestriction] = useState("");
    const [locationRestriction, setLocationRestriction] = useState("");
    const [eventRestriction, setEventRestriction] = useState("");

    const [features, setFeatures] = useState([]);
    const [timeRestrictions, setTimeRestrictions] = useState([]);
    const [locationRestrictions, setLocationRestrictions] = useState([]);
    const [eventRestrictions, setEventRestrictions] = useState([]);

    const { id } = useParams();

    console.log(id);

    const [formData, setFormData] = useState({
          id: "",
        packageName: "",
        packageType: "",
        amount: "",
        validFrom: "",
        validUntil: "",
        days: "",
        description: "",
        terms: "",
    });
    const router = useRouter();
 

    //  getpackages details

    useEffect(() => {
        const fetchPackage = async () => {
            try {
                const packageData = await getPackageById(id);
                console.log("packageData", packageData);
                setFormData(packageData);
            } catch (error) {
                console.error("Error fetching package:", error);
            }
        };

        if (id) {
            fetchPackage();
        }
    }, [id]);



    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            await updatePackage(id, formData);

            toast.success("Package Updated Successfully");

            router.push("/dashboard/packages");
        } catch (error) {
            console.error(error);
        }
    };


    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };
    const handleAddFeature = () => {
        if (!feature.trim()) return;

        setFeatures([...features, feature]);
        setFeature("");
    };

    const handleAddTimeRestriction = () => {
        if (!timeRestriction.trim()) return;

        setTimeRestrictions([...timeRestrictions, timeRestriction]);
        setTimeRestriction("");
    };

    const handleAddLocationRestriction = () => {
        if (!locationRestriction.trim()) return;

        setLocationRestrictions([...locationRestrictions, locationRestriction]);
        setLocationRestriction("");
    };

    const handleAddEventRestriction = () => {
        if (!eventRestriction.trim()) return;

        setEventRestrictions([...eventRestrictions, eventRestriction]);
        setEventRestriction("");
    };










    return (

        <div className="w-full  bg-white p-6 rounded-lg shadow-md">
            <form className="space-y-4" onSubmit={handleSubmit}>

                {/* name and type of package */}
                <div className="flex justify-between  gap-4">
                    <Input
                        name="packageName"
                        label="Package Name"
                        placeholder="e.g., Premium Plan"

                        value={formData.packageName}
                        onChange={handleChange}
                        required />



                    <Select
                        name="packageType"
                        label="Package Type"
                        options={[
                            { label: "Recurring", value: "Recurring" },
                            { label: "One Time", value: "one-time" },
                            { label: "Premium", value: "Premium" },
                        ]}
                        value={formData.packageType}
                        onChange={handleChange}
                    />
                </div>

                {/* vaild from vaild until and days */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-5">

                    <Input
                        label="Valid From"
                        name="validFrom"
                        type="date"
                        value={formData.validFrom}
                        onChange={handleChange}
                        required
                    />

                    <Input
                        label="Valid Until"
                        name="validUntil"
                        type="date"
                        value={formData.validUntil}
                        onChange={handleChange}
                        required
                    />

                    <Input
                        label="Days"
                        name="days"
                        type="number"
                        placeholder="Enter number of days"
                        value={formData.days}
                        onChange={handleChange}
                        min="1"
                        required
                    />

                    {/* Description */}
                    <div className="col-span-full mt-5">
                        <Textarea
                            label="Description"
                            name="description"
                            value={formData.description}
                            onChange={handleChange}
                            placeholder="Enter package description..."
                            rows={4}
                        />
                    </div>

                    <div className="col-span-full mt-5">
                        <Textarea
                            label="Terms & Conditions"
                            name="terms"
                            value={formData.terms}
                            onChange={handleChange}
                            placeholder="Enter package terms & conditions..."
                            rows={5}
                        />
                    </div>

                    {/* package features */}
                    <div className="col-span-full mt-6">
                        <label className="block mb-2 text-sm font-medium">
                            Package Features
                        </label>

                        <div className=" w-64 flex justify-start gap-2">
                            <Input
                                placeholder="Add a feature..."
                                name="feature"
                                size="sm"

                            //   value={feature}
                            //   onChange={(e) => setFeature(e.target.value)}
                            />
                            <Button
                                type="button"
                                className="h-12 w-12 flex items-center justify-center rounded-lg bg-black text-white hover:bg-gray-800"
                                rightIcon={Plus}
                            //   onClick={handleAddFeature}
                            >

                            </Button>
                        </div>

                        {/* location features  */}

                        <div className="col-span-full mt-6">
                            <label className="block mb-2 text-sm font-medium">
                                Location Restrictions
                            </label>

                            <div className="w-64 flex justify-start gap-2">
                                <Input
                                    placeholder="Add location restriction..."
                                    name="locationRestriction"
                                    value={locationRestriction}
                                    onChange={(e) => setLocationRestriction(e.target.value)}
                                />

                                <button
                                    type="button"
                                    className="h-12 w-12 flex items-center justify-center rounded-lg bg-black text-white hover:bg-gray-800"
                                    onClick={handleAddLocationRestriction}
                                >
                                    <Plus size={20} />
                                </button>
                            </div>
                        </div>
                        {/* 
event restrictions */}
                        <div className="col-span-full mt-6">
                            <label className="block mb-2 text-sm font-medium">
                                Event Restrictions
                            </label>

                            <div className="w-64 flex justify-start gap-2">
                                <Input
                                    placeholder="Add event restriction..."
                                    name="eventRestriction"
                                    value={eventRestriction}
                                    onChange={(e) => setEventRestriction(e.target.value)}
                                />

                                <button
                                    type="button"
                                    className="h-12 w-12 flex items-center justify-center rounded-lg bg-black text-white hover:bg-gray-800"
                                    onClick={handleAddEventRestriction}
                                >
                                    <Plus size={20} />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>


            </form>


            <div className="flex justify-between gap-4 mt-6">
                <Button
                    type="Button"
                    className="mt-6 bg-white text-black hover:bg-gray-200 shadow-md border border-gray-300"
                    leftIcon={CircleArrowLeft}
                    onClick={() => router.back()}
                >
                    Back
                </Button>
                <Button type="submit" className="mt-6 bg-black text-white hover:bg-gray-700 shadow-md"
                    leftIcon={Plus}
                    onClick={handleSubmit}
                >
                    update 
                </Button>
            </div>
        </div>


    )
}
export default EditPackages;