
"use client"
import Button from "@/app/component/uicomponents/button";
import Input from "@/app/component/uicomponents/input";
import Select from "@/app/component/uicomponents/select";
import { auth, db } from "@/firebase/firebase";
import { ref } from "firebase/storage";
import { Camera, Key } from "lucide-react";
import {
  User,
  Mail,
  Phone,
  Briefcase,
  Calendar,
} from "lucide-react";
import react, { useRef, useState } from "react";


const ProfilePage = () => {


  const fileInputRef = useRef(null);

  const [image, setImage] = useState("/img/images.png");
  const [loading, setLoading] = useState(false);

  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    gender: "",
    dob: "",
    phoneNumber: "",

  });

  const handleImageUpload = async (e) => {
    try {
      const file = e.target.files[0];

      if (!file) return;

      setLoading(true);

      // Preview Image
      setImage(URL.createObjectURL(file));

      const user = auth.currentUser;
      console.log("User:", user);

      if (!user) {
        alert("User not logged in");
        return;
      }

      // Storage Path
      const storageRef = ref(storage, `profileImages/${user.uid}`);
      console.log("Uploading...");

      // Upload
      await uploadBytes(storageRef, file);
      console.log("Uploaded successfully");

      // Get URL
      const downloadURL = await getDownloadURL(storageRef);
      console.log("Download URL:", downloadURL);

      // Save URL in Firestore
      await updateDoc(doc(db, "users", user.uid), {
        profileImage: downloadURL,
      });

      console.log("Firestore updated");
      // Show uploaded image
      setImage(downloadURL);

      alert("Profile photo updated successfully!");
    } catch (error) {
      console.error("Upload Error:", error);
      alert(error.message);
    } finally {
      setLoading(false);
    }
  };


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

  return (
    <>
      <div>
        <h1 className="text-2xl font-bold">
          User Profile
        </h1>

        <p className="text-gray-400 mt-2 mb-3">
          Manage your personal account settings
        </p>
      </div>
      <div className="w-[75%] flex flex-col bg-white rounded-xl h-screen p-7">
        <span className="text-[16px] font-medium text-black ">Profile Information</span>
        <span className="text-sm font-medium text-gray-500 ">Update your photo and personal details</span>


        {/* profile picture */}
        <div className="flex items-center gap-4 mt-5">

          <img
            src={image}
            alt="Profile"
            className="w-[70px] h-[70px] rounded-full object-cover border"
          />

          <div className="flex flex-col gap-1">

            <Button
              type="button"
              leftIcon={Camera}
              onClick={() => fileInputRef.current.click()}
              className="bg-white text-black border border-black h-10 px-4 text-sm"
              disabled={loading}
            >
              {loading ? "Uploading..." : "Upload Photo"}
            </Button>

            <span className="text-12 text-gray-500 ">JPG, PNG or GIF. Max size 2MB</span>
          </div>

          <input
            ref={fileInputRef}
            type="file"
            accept="image/*"
            className="hidden"
            onChange={handleImageUpload}
          />

        </div>


        {/* details */}


        <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-6">

          {/* First Name */}
          <div>
            <Input
              label="First Name"
              name="firstName"
              value={form.firstName}
              onChange={handleChange}
              leftIcon={<User/>}
            />
          </div>

          {/* Last Name */}
          <div>
            <Input
              label="Last Name"
              name="lastName"
              value={form.lastName}
              onChange={handleChange}
              leftIcon={<User size={18} />}
            />
          </div>

          {/* Email - Full Width */}
          <div className="md:col-span-2">
            <Input
              label="Email"
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              disabled
              leftIcon={<Mail size={18} />}
            />
          </div>

          {/* Phone - Full Width */}
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

          {/* Designation */}
          <div>
            <Input
              label="Designation"
              type="text"
              name="Designation"
              value={form.Designation}
              onChange={handleChange}
              leftIcon={<Briefcase size={18} />}
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

          {/* DOB - Full Width */}
          <div className="md:col-span-2">
            <Input
              label="Date Of Birth"
              type="date"
              name="dob"
              value={form.dob}
              onChange={handleChange}
              required
              leftIcon={<Calendar size={18} />}
            />
          </div>

        </form> </div>

          <div className="w-[75%] flex flex-col  bg-white rounded-xl h-auto m-5 p-5">
            <div className="flex justify-between">
            <div className="flex flex-col">
        <span className="text-[16px] font-medium text-black ">Change Password</span>
        <span className="text-sm font-medium text-gray-500 ">Update your password to keep your account secure</span>
        </div>
              <Button
              type="button"
              leftIcon={Key}
              // onClick={() => fileInputRef.current.click()}
              className="bg-white text-black border border-black h-10 px-4 text-sm"
              
            >
             Change Password
            </Button></div>


<p className="text-center text-gray-400 mt-6">Click the "Change Password" button above to update your password</p>
   </div>
    </>

  );
}
export default ProfilePage