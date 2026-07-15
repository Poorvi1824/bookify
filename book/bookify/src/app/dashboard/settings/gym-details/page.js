"use client"

import Button from "@/app/component/uicomponents/button";
import Input from "@/app/component/uicomponents/input";
import Select from "@/app/component/uicomponents/select";
import { useState } from "react";
import {
  User,
  Mail,
  Phone,
  Briefcase,
  Clock,
  Globe,
  Eye,
  EyeOff,
  File,
} from "lucide-react";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";
import TimezoneSelect from "react-timezone-select";
import { currencyOptions } from "@/app/component/uicomponents/currencySelect";
import { TiCalculator } from "react-icons/ti";

const DAYS = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];

const DEFAULT_HOURS = DAYS.reduce((acc, day) => {
  acc[day] = {
    isOpen: day !== "Sunday",
    openTime: "06:00",
    closeTime: "22:00",
  };
  return acc;
}, {});

const GymDetails = () => {
  const [loading, setLoading] = useState(false);

  const [timezone, setTimezone] = useState(
    Intl.DateTimeFormat().resolvedOptions().timeZone
  );

  const [form, setForm] = useState({
    GymName: "",
    CustomDomain: "",
    email: "",
    BusinessType: "",
    phoneNumber: "",
    Designation: "",
  });

  const [businessHours, setBusinessHours] = useState(DEFAULT_HOURS);

  const [socialLinks, setSocialLinks] = useState({
    facebook: "",
    twitter: "",
    instagram: "",
  });

  const [showSocialPublicly, setShowSocialPublicly] = useState(true);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleToggleDay = (day) => {
    setBusinessHours((prev) => ({
      ...prev,
      [day]: { ...prev[day], isOpen: !prev[day].isOpen },
    }));
  };

  const handleTimeChange = (day, field, value) => {
    setBusinessHours((prev) => ({
      ...prev,
      [day]: { ...prev[day], [field]: value },
    }));
  };

  const handleSocialChange = (e) => {
    setSocialLinks({
      ...socialLinks,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  };

  return (
    <>
      <div>
        <h1 className="text-2xl font-bold">Gym Details</h1>
        <p className="text-gray-400 mt-2 mb-3">
          Manage your gym&apos;s business information and settings
        </p>
      </div>

      {/* ── Part 1: Business Information ── */}
      <div className="w-[75%] flex flex-col bg-white rounded-xl p-7">
        <span className="text-[16px] font-medium text-black">
          Business Information
        </span>
        <span className="text-sm font-medium text-gray-500">
          Update your gym&apos;s public information
        </span>

        <form
          onSubmit={handleSubmit}
          className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-6 mt-6"
        >
          <div className="md:col-span-2">
            <Input
              label="Gym Name"
              name="GymName"
              value={form.GymName}
              onChange={handleChange}
              leftIcon={<TiCalculator />}
            />
          </div>

          <div className="md:col-span-2">
            <Input
              label="Custom Domain"
              name="CustomDomain"
              value={form.CustomDomain}
              onChange={handleChange}
              leftIcon={<User size={18} />}
            />
          </div>

          <div className="md:col-span-2">
            <Input
              label="Business Email"
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              disabled
              leftIcon={<Mail size={18} />}
            />
          </div>

          <div className="md:col-span-2">
            <Select
              label="Business Type"
              name="BusinessType"
              value={form.BusinessType}
              onChange={handleChange}
              options={[
                { value: "Business", label: "Business" },
                { value: "Individual", label: "Individual" },
              ]}
            />
          </div>

          <div className="md:col-span-2">
            <Input
              label="Phone Number"
              type="tel"
              name="phoneNumber"
              value={form.phoneNumber}
              onChange={handleChange}
              required
              leftIcon={<Phone size={18} />}
            />
          </div>

          <div className="md:col-span-2">
            <Input
              label="Designation"
              type="text"
              name="Designation"
              value={form.Designation}
              onChange={handleChange}
              leftIcon={<Briefcase size={18} />}
            />
          </div>

          <div className="md:col-span-2">
            <label className="block mb-2 text-sm font-medium">Time Zone</label>
            <TimezoneSelect value={timezone} onChange={setTimezone} />
          </div>

          <div className="mt-6">
            <label className="block mb-2 text-sm font-medium">Currency</label>
            <Select
              options={currencyOptions}
              formatOptionLabel={(option) => {
                const Icon = option.icon;
                return (
                  <div className="flex items-center gap-2">
                    <Icon size={16} />
                    <span>{option.label}</span>
                  </div>
                );
              }}
            />
          </div>
        </form>
      </div>

      {/* ── Part 2: Business Hours ── */}
      <div className="w-[75%] flex flex-col bg-white rounded-xl mt-6 p-7">
        <div className="flex items-center gap-2 mb-1">
          <Clock size={20} className="text-gray-700" />
          <span className="text-[16px] font-medium text-black">
            Business Hours
          </span>
        </div>
        <span className="text-sm font-medium text-gray-500 mb-6">
          Set your gym&apos;s operating hours for each day
        </span>

        <div className="flex flex-col gap-3">
          {DAYS.map((day) => {
            const dayData = businessHours[day];
            return (
              <div
                key={day}
                className={`flex items-center justify-between rounded-lg border px-5 py-3 transition-colors ${
                  dayData.isOpen
                    ? "border-gray-200 bg-white"
                    : "border-gray-100 bg-gray-50"
                }`}
              >
                <div className="flex items-center gap-4 min-w-[160px]">
                  {/* <button
                    type="button"
                    onClick={() => handleToggleDay(day)}
                    className={`relative inline-flex h-6 w-11 shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ${
                      dayData.isOpen ? "bg-black" : "bg-gray-300"
                    }`}
                  >
                    <span
                      className={`pointer-events-none inline-block h-5 w-5 rounded-full bg-white shadow-md transform transition-transform duration-200 ${
                        dayData.isOpen ? "translate-x-5" : "translate-x-0"
                      }`}
                    />
                  </button> */}
                  <span
                    className={`text-sm font-medium ${
                      dayData.isOpen ? "text-gray-900" : "text-gray-400"
                    }`}
                  >
                    {day}
                  </span>
                </div>

                {dayData.isOpen ? (
                  <div className="flex items-center gap-3">
                    <input
                      type="time"
                      value={dayData.openTime}
                      onChange={(e) =>
                        handleTimeChange(day, "openTime", e.target.value)
                      }
                      className="rounded-lg border border-gray-300 px-3 py-2 text-sm outline-none focus:border-blue-500"
                    />
                    <span className="text-gray-400 text-sm">to</span>
                    <input
                      type="time"
                      value={dayData.closeTime}
                      onChange={(e) =>
                        handleTimeChange(day, "closeTime", e.target.value)
                      }
                      className="rounded-lg border border-gray-300 px-3 py-2 text-sm outline-none focus:border-blue-500"
                    />
                  </div>
                ) : (
                  <span className="text-sm text-red-400 font-medium">
                    Closed
                  </span>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* ── Part 3: Social Media & Links ── */}
      <div className="w-[75%] flex flex-col bg-white rounded-xl mt-6 p-7">
        <div className="flex items-center gap-2 mb-1">
          <Globe size={20} className="text-gray-700" />
          <span className="text-[16px] font-medium text-black">
            Social Media & Links
          </span>
        </div>
        <span className="text-sm font-medium text-gray-500 mb-6">
          Connect your social media profiles
        </span>

        <div className="flex flex-col gap-5">
          <div className="flex items-center gap-4">
            <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-blue-600 text-white shrink-0">
              <FaFacebookF size={18} />
            </div>
            <div className="flex-1">
              <Input
                label="Facebook"
                name="facebook"
                value={socialLinks.facebook}
                onChange={handleSocialChange}
                placeholder="https://facebook.com/yourgym"
              />
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-sky-500 text-white shrink-0">
              <FaTwitter size={18} />
            </div>
            <div className="flex-1">
              <Input
                label="Twitter"
                name="twitter"
                value={socialLinks.twitter}
                onChange={handleSocialChange}
                placeholder="https://twitter.com/yourgym"
              />
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-gradient-to-br from-purple-600 via-pink-500 to-orange-400 text-white shrink-0">
              <FaInstagram size={18} />
            </div>
            <div className="flex-1">
              <Input
                label="Instagram"
                name="instagram"
                value={socialLinks.instagram}
                onChange={handleSocialChange}
                placeholder="https://instagram.com/yourgym"
              />
            </div>
          </div>

          {/* Show Social Links Publicly toggle */}
          <div className="mt-4 pt-5 border-t border-gray-100">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                {showSocialPublicly ? (
                  <Eye size={18} className="text-blue-600" />
                ) : (
                  <EyeOff size={18} className="text-gray-400" />
                )}
                <div>
                  <label className="text-sm font-medium text-gray-700">
                    Show Social Links Publicly
                  </label>
                  <p className="text-xs text-gray-400 mt-0.5">
                    {showSocialPublicly
                      ? "Your social links are visible on your public gym profile"
                      : "Your social links are hidden from public view"}
                  </p>
                </div>
              </div>
              <button
                type="button"
                role="switch"
                aria-checked={showSocialPublicly}
                onClick={() => setShowSocialPublicly((prev) => !prev)}
                className={`relative inline-flex h-6 w-11 shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ${
                  showSocialPublicly ? "bg-black" : "bg-gray-300"
                }`}
              >
                <span
                  className={`pointer-events-none inline-block h-5 w-5 rounded-full bg-white shadow-md transform transition-transform duration-200 ${
                    showSocialPublicly ? "translate-x-5" : "translate-x-0"
                  }`}
                />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Save Button */}
      <div className="w-[75%] flex justify-end mt-6">
        <Button
          type="submit"
          variant="primary"
          size="md"
          loading={loading}
          className="bg-black text-white hover:bg-black px-8"
          leftIcon={<File size={18} />}
        >
          Save Changes
        </Button>
      </div>
    </>
  );
};

export default GymDetails;