export default function AuthLayout({ children }) {
  return (


<div className="min-h-screen flex bg-gray-50">
      {/* Left side */}
      <div className="h-screen w-[45%] bg-black justify-center items-center flex flex-col px-6" >
              {/* Logo */}
       {/* Top */}
    <div>
      {/* Logo */}
      <div className="inline-flex items-center gap-3 bg-white rounded-full px-5 py-3">
        <img
          src="/logo.avif"
          alt="logo"
          className="w-8 h-8 object-contain"
        />
        <span className="text-2xl font-bold text-black">
          Fitracker
        </span>
      </div>

      {/* Heading */}
      <div className="mt-10 max-w-md">
        <h1 className="text-3xl font-bold leading-tight text-white">
          Start your
          <br />
          Fitness Journey
          <br />
          with us!
        </h1> </div></div></div>


      {/* Right side */}
      <div className="h-screen w-full bg-gray-100 flex flex-col">
        {children}
      </div>
    </div>
  );
}