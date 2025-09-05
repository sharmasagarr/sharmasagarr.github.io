import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white text-center font-outfit px-4 dark:bg-gray-900">
      {/* Animation */}
      <lottie-player
        src="/animations/404.json"
        background="transparent"
        speed="1"
        style={{ width: "280px", height: "280px" }}
        loop
        autoplay
      ></lottie-player>

      {/* Title */}
      <h1 className="mt-6 text-3xl sm:text-4xl font-bold text-gray-900 dark:text-gray-100">
        Oops! Page not found
      </h1>

      {/* Subtitle */}
      <p className="mt-2 text-gray-600 dark:text-gray-400 max-w-md">
        The page you’re looking for doesn’t exist or has been moved.  
        Let’s get you back home.
      </p>

      {/* Button */}
      <Link
        to="/"
        className="mt-6 inline-block px-6 py-3 rounded-full bg-blue-600 text-white font-medium shadow-md hover:bg-blue-700 transition-colors duration-200 dark:bg-blue-500 dark:hover:bg-blue-400"
      >
        Go Home
      </Link>
    </div>
  );
}
