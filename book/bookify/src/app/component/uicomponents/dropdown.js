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
        className=" h-9
    min-w-fit
    px-4
    border
    border-gray-200
    bg-gray-50
    rounded-full
    flex
    items-center
    justify-between
    gap-2
    text-sm
    font-light
    text-gray-800
    hover:bg-gray-50
    transition"
        rightIcon={
          <ChevronDown
            size={16}
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
          className="
absolute
left-0
mt-2
w-full
rounded-xl
border
border-gray-200
bg-white
shadow-lg
overflow-hidden
z-50
"
        >
          {options.map((option) => (
            <Button
              key={option.id}
              onClick={() => {
                onChange(option.value);
                setOpen(false);
              }}
              className="w-full flex items-center  py-2 text-sm hover:bg-gray-50 transition"

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