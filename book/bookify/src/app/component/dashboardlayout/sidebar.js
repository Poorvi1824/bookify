"use client";

import React, { useState } from "react";
import {
  ChevronLeft,
  ChevronRight,
  LayoutDashboard,
  Users,
  Dumbbell,
  BookOpen,
  UserCircle,
  Calendar,
  Package,
  CreditCard,
  BarChart3,
  LayoutGrid,
  CreditCard as BillingIcon,
  Settings,
  Sparkles,
} from "lucide-react";
import { useRouter } from "next/navigation";

const Sidebar = ({ isCollapsed, setIsCollapsed }) => {
  const [active, setActive] = useState("Dashboard");
  const [moreActive, setMoreActive] = useState("");
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const router = useRouter();

  const sideMenuBar = [
    { name: "Dashboard", icon: LayoutDashboard },
    { name: "Members", icon: Users },
    { name: "Training Programs", icon: Dumbbell },
    { name: "Classes", icon: BookOpen },
    { name: "Clients", icon: UserCircle },
    { name: "Booking", icon: Calendar },
    { name: "Packages", icon: Package },
    { name: "Transactions", icon: CreditCard },
    { name: "Sales Analytics", icon: BarChart3 },
  ];

  const bottomMenu = [
    { name: "Billing", icon: BillingIcon },
    { name: "Settings", icon: Settings },
  ];

 


  return (
  // In your sidebar, keep the <aside> simple - let the parent control width
<aside className="h-full bg-white flex flex-col w-full">
  {/* Header */}
  <div className="h-16 w-full flex items-center px-4 border-b border-gray-200 shrink-0">
    {/* Logo */}
    <div className={`flex items-center gap-3 overflow-hidden transition-all duration-300 ${isCollapsed ? "w-0 opacity-0" : "w-40 opacity-100"}`}>
      <img src="/logo.avif" alt="logo" className="w-8 h-8 shrink-0" />
      <span className="text-lg text-gray-900 font-bold whitespace-nowrap">Fitracker</span>
    </div>
    
    {/* Toggle - ml-auto pushes right when expanded, mx-auto centers when collapsed */}
    <button
      onClick={() => setIsCollapsed(!isCollapsed)}
      className={`w-8 h-8 rounded-lg border border-gray-300 flex items-center justify-center hover:bg-gray-100 transition-colors shrink-0 ${isCollapsed ? "mx-auto" : "ml-auto"}`}
    >
      {isCollapsed ? <ChevronRight size={16} /> : <ChevronLeft size={16} />}
    </button>
  </div>

      {/* Scrollable Main Navigation */}
      <nav className="flex-1 overflow-y-scroll w-full py-4 px-3 scrollbar-thin cuustom-scrollbar">
        <div className="flex flex-col gap-1 w-full relative">
          {sideMenuBar.map((item, index) => {
            const Icon = item.icon;
            const isActive = active === item.name;
            return (
              <button
                key={item.name}
                onClick={() => {
                  setActive(item.name);
                  const path =
                    item.name === "Dashboard"
                      ? "/dashboard"
                      : `/dashboard/${item.name.toLowerCase()}`;

                  router.push(path);
  }}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                className={`w-full flex items-center gap-3 px-3 font-semibold py-2.5 rounded-xl transition-all duration-200 group relative
                  ${isActive ? "bg-black text-white" : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"}
                  ${isCollapsed ? "justify-center px-2" : ""}
                `}
                title={isCollapsed ? item.name : undefined}
              >
                {isActive && (
                  <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-6 rounded-r-full bg-black" />
                )}
                {!isActive && hoveredIndex === index && (
                  <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-6 rounded-r-full bg-gray-300" />
                )}

                <Icon
                  size={20}
                  strokeWidth={isActive ? 2.5 : 2}
                  className={`shrink-0 ${isActive ? "text-white" : "text-gray-400 group-hover:text-gray-600"}`}
                />
                <span
                  className={`font-medium text-sm whitespace-nowrap transition-all duration-300 overflow-hidden ${isCollapsed ? "w-0 opacity-0" : "w-auto opacity-100"
                    }`}
                >
                  {item.name}
                </span>
              </button>
            );
          })}
        </div>

        {/* Add-ons Card */}
        {/* <div
          className={`mt-4 transition-all duration-300 overflow-hidden ${
            isCollapsed ? "w-0 opacity-0 h-0" : "w-auto opacity-100"
          }`}
        >
          <div className="rounded-xl p-4 bg-gradient-to-br from-blue-500 to-indigo-600 text-white shadow-md">
            <div className="flex items-center gap-3">
              <div className="bg-white/20 p-2 rounded-lg">
                <Sparkles size={18} />
              </div>
              <div>
                <p className="font-semibold text-sm">Add-ons</p>
                <p className="text-xs text-white/70 mt-0.5">Grow your business</p>
              </div>
            </div>
          </div>
        </div> */}
      </nav>

      {/* More Settings */}
      <div className="w-full py-3 px-3 border-t border-gray-200 shrink-0">
        <div
          className={`px-3 mb-2 transition-all duration-300 overflow-hidden ${isCollapsed ? "h-0 opacity-0" : "h-auto opacity-100"
            }`}
        >
          <span className="text-xs font-semibold tracking-wider text-gray-400 uppercase">
            More Settings
          </span>
        </div>
        <button
          onClick={() =>
            setMoreActive(moreActive === "More Menus" ? "" : "More Menus")
          }
          className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-xl transition-all duration-200
            ${moreActive === "More Menus" ? "bg-black text-white" : "text-gray-500 hover:bg-gray-50 hover:text-gray-900"}
            ${isCollapsed ? "justify-center px-2" : ""}
          `}
          title={isCollapsed ? "More Menus" : undefined}
        >
          <LayoutGrid
            size={20}
            strokeWidth={moreActive === "More Menus" ? 2.5 : 2}
            className={`shrink-0 ${moreActive === "More Menus" ? "text-white" : "text-gray-400"}`}
          />
          <span
            className={`font-medium text-sm whitespace-nowrap transition-all duration-300 overflow-hidden ${isCollapsed ? "w-0 opacity-0" : "w-auto opacity-100"
              }`}
          >
            More Menus
          </span>
        </button>
      </div>

      {/* Bottom Section */}
      <div className="w-full py-3 px-3 border-t border-gray-200 shrink-0">
        <div className="flex flex-col gap-1">
          {bottomMenu.map((item) => {
            const Icon = item.icon;
            const isBottomActive = active === item.name;
            return (
              <button
                key={item.name}
                onClick={() => setActive(item.name)}
                className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-xl transition-all duration-200
                  ${isBottomActive ? "bg-black text-white" : "text-gray-500 hover:bg-gray-50 hover:text-gray-900"}
                  ${isCollapsed ? "justify-center px-2" : ""}
                `}
                title={isCollapsed ? item.name : undefined}
              >
                <Icon
                  size={20}
                  className={`shrink-0 ${isBottomActive ? "text-white" : "text-gray-400"}`}
                />
                <span
                  className={`font-medium text-sm whitespace-nowrap transition-all duration-300 overflow-hidden ${isCollapsed ? "w-0 opacity-0" : "w-auto opacity-100"
                    }`}
                >
                  {item.name}
                </span>
              </button>
            );
          })}
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;