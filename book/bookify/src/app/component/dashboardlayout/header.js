
"use client";

import React, { useState } from "react";
import { signOut } from "firebase/auth";
import { auth } from "@/firebase/firebase";
import { useRouter } from "next/navigation";

import { MessageCircle, Mail, Phone, Bell, MapPin, LogOut } from "lucide-react";
import LogoutDialog from "../logout/logoutDialog";


const Header = ({ isCollapsed }) => {
  const router = useRouter();
  const [showLogoutDialog, setShowLogoutDialog] = useState(false);



   // Step 1: Just open the dialog (don't logout yet)
  const handleLogoutClick = () => {
    setShowLogoutDialog(true);
  };

  // Step 2: Actually logout when user confirms
  const handleConfirmLogout = async () => {
    try {
      await signOut(auth);
      document.cookie = "token=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT";
      setShowLogoutDialog(false);
      router.push("/login");
    } catch (error) {
      console.error("Logout Error:", error);
    }
  };



  // Sidebar widths: collapsed = 80px (w-20), expanded = 240px (w-60)
  const sidebarWidth = isCollapsed ? 80 : 240;







  return (
    <div
      className="fixed top-0 z-50 h-16 bg-white flex items-center justify-end gap-4 px-4 border-b border-gray-200 flex-shrink-0 transition-all duration-300 ease-in-out"
      style={{
        left: `${sidebarWidth}px`,      // Push from left by sidebar width
        width: `calc(100% - ${sidebarWidth}px)`  // Fill remaining space
      }}
    >

      <div className="flex items-center gap-2">

        {/* WhatsApp */}
        <button className="p-2 rounded-full text-gray-600 hover:text-green-500 hover:bg-green-50 transition">
          <MessageCircle className="w-5 h-5" />
        </button>

        {/* Mail */}
        <button className="p-2 rounded-full text-gray-600 hover:text-gray-500 hover:bg-gray-100 transition">
          <Mail className="w-5 h-5" />
        </button>

        {/* Phone */}
        <button className="p-2 rounded-full text-gray-600 hover:text-gray-500 hover:bg-gray-100 transition">
          <Phone className="w-5 h-5" />
        </button>

        {/* Divider */}
        <div className="border-r border-gray-300 h-6"></div>

        {/* Bell */}
        <button className="p-2 rounded-full text-gray-600 hover:text-gray-500 hover:bg-gray-100 transition">
          <Bell className="w-5 h-5" />
        </button>

        {/* Location */}
        <div className="p-2 flex items-center gap-1.5 rounded-full text-gray-600 hover:text-gray-500 hover:bg-gray-100 transition cursor-pointer">
          <MapPin className="w-5 h-5 text-[rgb(30,48,80)]" />
          <span className="text-sm font-medium">Gwalior</span>
        </div>

      </div>
      <div className="flex items-center gap-2" >
        {/* Profile Picture */}
        <div className="w-10 h-10 rounded-full overflow-hidden">
          <img src="/img/user.jpg" alt="Profile" className="w-full h-full object-cover" />
        </div>
        {/* Logout */}
        <button
           onClick={handleLogoutClick}  // ← changed from handleLogout
          className="px-3 py-1.5 rounded-lg text-red-500 hover:bg-red-50 transition"
        >
          <LogOut className="w-5 h-5" />
        </button>
          {/* Confirmation Dialog */}
      <LogoutDialog
        isOpen={showLogoutDialog}
        onClose={() => setShowLogoutDialog(false)}
        onConfirm={handleConfirmLogout}
      />
      </div>
    </div>
  );
};

export default Header;