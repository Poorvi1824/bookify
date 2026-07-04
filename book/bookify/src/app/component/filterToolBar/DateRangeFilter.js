"use client";

import { useEffect, useRef, useState } from "react";
import { Calendar } from "lucide-react";
import { DayPicker } from "react-day-picker";
import { format } from "date-fns";
import "react-day-picker/dist/style.css";

import Button from "../uicomponents/button";

const DateRangeFilter = ({ value, onChange }) => {
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef(null);

  const handleSelect = (range) => {
    onChange(range);
  };

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
      document.removeEventListener(
        "mousedown",
        handleOutsideClick
      );
  }, []);

  const buttonLabel =
    value?.from && value?.to
      ? `${format(value.from, "dd MMM")} - ${format(
          value.to,
          "dd MMM yyyy"
        )}`
      : "Pick Date Range";

  return (
    <div className="relative" ref={dropdownRef}>
      <Button
        onClick={() => setOpen(!open)}
        className="min-w-[220px] rounded-full bg-gray-100 text-black hover:bg-gray-200"
        leftIcon={Calendar}
      >
        {buttonLabel}
      </Button>

      {open && (
        <div className="absolute left-0 mt-3 rounded-2xl border bg-white shadow-xl z-50 p-4">
          <DayPicker
            mode="range"
            selected={value}
            onSelect={handleSelect}
            numberOfMonths={2}
          />
        </div>
      )}
    </div>
  );
};

export default DateRangeFilter;