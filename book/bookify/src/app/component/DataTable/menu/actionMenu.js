"use client";

import { useEffect, useRef, useState } from "react";
import { MoreVertical, Copy, Download } from "lucide-react";

const ActionMenu = ({ orderId }) => {
  const [open, setOpen] = useState(false);
  const menuRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(orderId);
    setOpen(false);
  };

  const handleDownload = () => {
    console.log("Download:", orderId);

    // We'll implement this later.
    setOpen(false);
  };

  return (
    <div className="relative" ref={menuRef}>
      <button
        onClick={() => setOpen((prev) => !prev)}
        className="rounded-lg p-2 hover:bg-gray-100 transition"
      >
        <MoreVertical size={18} />
      </button>

      {open && (
        <div className="absolute right-0 mt-2 w-44 rounded-xl border border-gray-200 bg-white shadow-lg z-50">
          <button
            onClick={handleCopy}
            className="flex w-full items-center gap-2 px-4 py-3 text-left text-14 hover:bg-gray-50"
          >
            <Copy size={16} />
            Copy Order ID
          </button>

          <button
            onClick={handleDownload}
            className="flex w-full items-center gap-2 px-4 py-3 text-left text-14 hover:bg-gray-50"
          >
            <Download size={16} />
            Download
          </button>
        </div>
      )}
    </div>
  );
};

export default ActionMenu;    