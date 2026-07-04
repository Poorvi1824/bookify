"use client";

import { useState, useRef, useEffect } from "react";
import { ChevronDown } from "lucide-react";
import { Dot } from "lucide-react";
import Button from "./button";

const FilterDropdown = ({
  title,
  options,
  value,
  onChange,

}) => {
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef(null);
  console.log(options, "options");


  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target)
      ) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);

    return () =>
      document.removeEventListener("mousedown", handleOutsideClick);
  }, []);

  return (
    <div className="relative" ref={dropdownRef}>
      {/* Button */}
      <Button
        onClick={() => setOpen(!open)}
        className="w-[150px] flex items-center justify-between gap-2 py-1 px-1 rounded-full bg-gray-100 text-gray-700 text-sm shadow-sm hover:shadow-sm transition-all duration-300"
        rightIcon={
          <ChevronDown
            size={18}
            className={`transition-transform duration-300 ${open ? "rotate-180" : ""
              }`}
          />
        }
      >
        {title}
      </Button>

      {/* Dropdown */}
      {open && (
        <div
          className="absolute left-0 mt-3 w-full rounded-2xl bg-white shadow-2xl border border-gray-200 overflow-hidden z-50"
        >
          {options.map((option) => (
            <Button
              key={option.id}
              onClick={() => {
                onChange(option.value);
                setOpen(false);
              }}
              className="w-full flex items-start justify-start px-3 py-3 rounded-full hover:bg-gray-100 transition-all duration-200 text-left"

              leftIcon={
                option.color ? (
                  <Dot
                    size={16}
                    className={option.color}
                  />
                ) : null
              }
            >
              {option.label}
            </Button>
          ))}
        </div>
      )}
    </div>
  );
};

export default FilterDropdown;