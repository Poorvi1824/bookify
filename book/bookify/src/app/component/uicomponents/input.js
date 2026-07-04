"use client";

import React from "react";

const Input = ({
  label,
  type = "text",
  name,
  value,
  onChange,
  placeholder,
  required = false,
  disabled = false,
  error = "",
  className = "",
  leftIcon: LeftIcon,
  rightIcon: RightIcon,
}) => {
  return (
    <div className="w-full">
      {label && (
        <label
          htmlFor={name}
          className="block mb-2 text-sm font-medium text-gray-700"
        >
          {label}
          {required && <span className="text-red-500 ml-1">*</span>}
        </label>
      )}

      <input
        id={name}
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required={required}
        disabled={disabled}
        className={`w-full rounded-lg border border-gray-300 px-4 py-3
        focus:outline-none
  placeholder:text-black placeholder:font-extralight placeholder:text-sm
       
        transition-all
        ${error ? "border-red-500" : ""}
        ${className}`}
        
      />

      {error && (
        <p className="mt-1 text-sm text-red-500">
          {error}
        </p>
      )}
    </div>
  );
};

export default Input;