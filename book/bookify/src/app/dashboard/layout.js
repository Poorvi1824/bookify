"use client";

import { useState } from "react";
import Header from "../component/dashboardlayout/header";
import Sidebar from "../component/dashboardlayout/sidebar";
import Main from "../component/dashboardlayout/main";

const DashboardLayout = ({ children }) => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  return (
    <div className="w-full h-screen flex bg-white">
      
      {/* Sidebar - width transitions with sidebar state */}
      <div
        className={`h-full border-r border-gray-200 flex-shrink-0 transition-all duration-300 ease-in-out ${
          isCollapsed ? "w-20" : "w-60"
        }`}
      >
        <Sidebar isCollapsed={isCollapsed} setIsCollapsed={setIsCollapsed} />
      </div>

      {/* Main area - grows automatically when sidebar shrinks */}
      <div className="flex-1 flex flex-col h-full overflow-hidden">
        
        {/* Header */}
        <Header />
        
        {/* Content */}
        <Main className="flex-1 overflow-y-auto p-4">
          {children}
        </Main>
        
      </div>
    </div>
  );
};

export default DashboardLayout;