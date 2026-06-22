import React from "react";
import { MessageCircle, Mail, Phone, Bell, MapPin } from "lucide-react";

const Header = () => {
  return (
    <div className="w-full h-16 bg-white flex items-center justify-end px-4 border-b border-gray-200 flex-shrink-0">
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
    </div>
  );
};

export default Header;