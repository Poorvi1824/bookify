export default function AuthLayout({ children }) {
  return (
    <div className="min-h-screen flex bg-gray-100">

      {/* Left Section */}
      <div className="relative w-[40%] min-h-screen bg-black overflow-hidden">

        {/* Decorative Dots */}
        <div className="absolute top-8 right-8 grid grid-cols-3 gap-3">
          {Array.from({ length: 9 }).map((_, i) => (
            <span
              key={i}
              className="w-2.5 h-2.5 rounded-full bg-gray-700"
            />
          ))}
        </div>

        {/* Content */}
        <div className="relative z-10 px-14 pt-12">

          {/* Logo */}
          <div className="inline-flex items-center gap-3 bg-white rounded-full px-6 py-3">
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
          <div className="mt-16 max-w-lg">
            <h1 className="text-white text-4xl font-extrabold leading-tight">
              Start your Fitness
              <br />
              journey with us!
            </h1>

            <p className="mt-8 text-gray-300 text-md leading-8">
              Lorem Ipsum is simply dummy text of the printing and
              typesetting industry. Lorem Ipsum has been the industry's
              standard dummy text ever since the 1500s.
            </p>
          </div>
        </div>

        {/* Girl Image */}
        <img
          src="/girl-workout.png"
          alt="Fitness"
          className="
            absolute
            bottom-0
            right-[-120px]
            w-[700px]
            object-contain
            pointer-events-none
          "
        />
      </div>

      {/* Right Section */}
      <div className="w-[55%] min-h-screen bg-gray-100 flex">
        {children}
      </div>
    </div>
  );
}