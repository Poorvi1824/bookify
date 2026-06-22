export default function AuthLayout({ children }) {
  return (


<div className="min-h-screen flex bg-gray-50">
      {/* Left side */}
      <div className="h-screen w-[45%] bg-black" />

      {/* Right side */}
      <div className="h-screen w-full bg-gray-100 flex flex-col">
        {children}
      </div>
    </div>
  );
}