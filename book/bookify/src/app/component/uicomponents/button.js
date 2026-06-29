// // components/Button.jsx
// import React from 'react';

// const Button = ({
//   children,
//   onClick,
//   type = 'button',
//   variant = 'primary',
//   size = 'sm',
//   disabled = false,
//   loading = false,
//   icon: Icon = null,
//   iconPosition = 'left',
//   className = '',
//   ...props
// }) => {
//   // Base styles
//   const baseStyles = 'inline-flex items-center justify-center font-medium rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed gap-2';

//   // Variant styles
//   const variants = {
//     primary: 'bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-500 active:bg-blue-800',
//     secondary: 'bg-gray-200 text-gray-800 hover:bg-gray-300 focus:ring-gray-500 active:bg-gray-400',
//     success: 'bg-green-600 text-white hover:bg-green-700 focus:ring-green-500 active:bg-green-800',
//     danger: 'bg-red-600 text-white hover:bg-red-700 focus:ring-red-500 active:bg-red-800',
//     outline: 'border border-gray-300 bg-white text-gray-900 hover:bg-gray-50 focus:ring-gray-500 active:bg-gray-100 shadow-sm',
//     ghost: 'text-blue-600 hover:bg-blue-50 focus:ring-blue-500 active:bg-blue-100',
//     dark: 'bg-black text-white hover:bg-gray-900 focus:ring-gray-500 active:bg-gray-800',
//   };

//   // Size styles
//   const sizes = {
//     sm: 'px-3 py-1 text-sm',
//     md: 'px-4 py-2.5 text-sm',
//     lg: 'px-6 py-3 text-base',
//     icon: 'p-2',
//   };

//   const classes = `${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`;

//   return (
//     <button
//       type={type}
//       onClick={onClick}
//       disabled={disabled || loading}
//       className={classes}
//       {...props}
//     >
//       {loading && (
//         <svg
//           className="animate-spin h-4 w-4 text-current"
//           xmlns="http://www.w3.org/2000/svg"
//           fill="none"
//           viewBox="0 0 24 24"
//         >
//           <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
//           <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
//         </svg>
//       )}
      
//       {Icon && iconPosition === 'left' && !loading && <Icon className="h-4 w-4" />}
//       {children}
//       {Icon && iconPosition === 'right' && !loading && <Icon className="h-4 w-4" />}
//     </button>
//   );
// };

// export default Button;

// const Button = ({
//   children,
//   type = "button",
//   onClick,
//   disabled = false,
//   className = "",
//   variant = "primary",

// }) => {
//   const variants = {
//     primary: "bg-blue-600 hover:bg-blue-700 text-white",
//     secondary: "bg-gray-600 hover:bg-gray-700 text-white",
//     success: "bg-green-600 hover:bg-green-700 text-white",
//     danger: "bg-red-600 hover:bg-red-700 text-white",
//     outline:
//       "border border-blue-600 text-blue-600 hover:bg-blue-50",
//   };

//   return (
//     <button
//       type={type}
//       onClick={onClick}
//       disabled={disabled}
//       className={`
//         px-4
        
//         rounded-lg
//         font-medium
//         transition-all
//         duration-200
//         disabled:opacity-50
//         disabled:cursor-not-allowed
//         ${variants[variant]}
//         ${className}
//       `}
//     >
//       {children}
//     </button>
//   );
// };

// export default Button;

import React from "react";

const Button = ({
  children,
  type = "button",
  variant = "primary",
  size = "sm",
  leftIcon: LeftIcon,
  rightIcon: RightIcon,
  loading = false,
  disabled = false,
  className = "",
  onClick,
  iconClassName
}) => {
  const variants = {
    primary: "bg-blue-600 text-white hover:bg-blue-700",
    secondary: "bg-gray-600 text-white hover:bg-gray-700",
    success: "bg-green-600 text-white hover:bg-green-700",
    danger: "bg-red-600 text-white hover:bg-red-700",
    outline:
      "border border-blue-600 text-blue-600 hover:bg-blue-50",
  };

  const sizes = {
    sm: "px-2 py-1.5  text-sm",
    md: "px-4 py-2 text-base",
    lg: "px-6 py-3 text-lg",
  };

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled || loading}
      className={`
        inline-flex items-center justify-center gap-2
        rounded-lg  transition-all duration-200 cursor
        disabled:opacity-50 disabled:cursor-not-allowed
        ${variants[variant]}
        ${sizes[size]}
        ${className}
      `}
    >
      {loading ? (
        <>
          <div className="h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent" />
          Loading...
        </>
      ) : (
        <>
        {LeftIcon && (
  <LeftIcon
  size={16}
    className={` ${iconClassName || ""}`}
  />
)}
          <span>{children}</span>
          {RightIcon && <RightIcon size={16} />}
        </>
      )}
    </button>
  );
};

export default Button;