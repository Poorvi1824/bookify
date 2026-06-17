import React from "react";
import { MessageCircle, Mail, Phone, Bell, MapPin,LogOut } from "lucide-react";

const Header = ({ isCollapsed }) => {
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
          <img src="user.avif" alt="Profile" className="w-full h-full object-cover" />
        </div>
        {/* Logout */}
        <button className="px-3 py-1.5 rounded-full text-red-500 rounded-lg hover:bg-red-600 transition">
          <LogOut className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
};

export default Header;