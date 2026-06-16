"use client"

import React, { useState } from "react";

const Main = ({ children }) => {
  const [isCollapsed, setIsCollapsed] = useState(false);    
  return(
    <div className="flex-1 overflow-y-auto p-4">
      {children}
    </div>
  )
}
export default Main;