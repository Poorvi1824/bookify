"use client";

const Textarea = ({
  label,
  name,
  value,
  onChange,
  placeholder,
  rows = 4,
  required = false,
}) => {
  return (
    <div className="w-full">
      {label && (
        <label className="block mb-2 text-sm font-medium">
          {label}
          {required && (
            <span className="text-red-500 ml-1">*</span>
          )}
        </label>
      )}

      <textarea
        name={name}
        value={value}
        onChange={onChange}
        rows={rows}
        placeholder={placeholder}
        required={required}
        className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none resize-none"
      />
    </div>
  );
};

export default Textarea;