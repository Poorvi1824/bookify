"use client";

import { useState } from "react";
import Header from "../component/dashboardlayout/header";
import Sidebar from "../component/dashboardlayout/sidebar";
import Main from "../component/dashboardlayout/main";

const DashboardLayout = ({ children }) => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  return (
    <div className="w-full h-screen flex bg-white overflow-hidden">
      
      {/* Sidebar */}
      <div
        className={`h-full border-r border-gray-200 flex-shrink-0 transition-all duration-300 ease-in-out ${
          isCollapsed ? "w-20" : "w-60"
        }`}
      >
        <Sidebar isCollapsed={isCollapsed} setIsCollapsed={setIsCollapsed} />
      </div>

      {/* Main area */}
      <div className="flex-1 flex flex-col h-full overflow-hidden">
        
        {/* Header - fixed with dynamic left offset */}
        <Header isCollapsed={isCollapsed} />

        {/* Content */}
        {/* Main content: pt-16 (64px = h-16) to push content below fixed header */}
  <main className="pt-16 h-screen bg-gray-100 overflow-y-auto custom-scrollbar">
    {/* Your scrollable content goes here */}
    
      {/* Content */}
    {children}
  </main>
        
      </div>
    </div>
  );
};

export default DashboardLayout;