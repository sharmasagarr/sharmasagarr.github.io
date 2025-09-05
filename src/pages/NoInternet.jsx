export default function NoInternet() {
  return (
    <div className="flex flex-col items-center justify-center h-[100dvh] bg-white dark:bg-slate-900 px-4 text-center">
      {/* Lottie Animation (Responsive Size) */}
      <lottie-player
        src="/animations/no-internet.json"
        background="transparent"
        speed="1"
        className="w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80"
        loop
        autoplay
      ></lottie-player>

      {/* Title */}
      <h1 className="text-2xl sm:text-3xl font-semibold mt-6 text-gray-900 dark:text-white">
        No Internet Connection
      </h1>

      {/* Subtitle */}
      <p className="mt-2 text-sm sm:text-base text-gray-600 dark:text-gray-400 max-w-md">
        Please check your network settings and try again.
      </p>

      {/* Retry Button */}
      <button
        onClick={() => window.location.reload()}
        className="text-sm sm:text-base mt-6 inline-block px-6 py-2 cursor-pointer rounded-full bg-blue-600 text-white font-medium shadow-md hover:bg-blue-700 transition-colors duration-200 dark:bg-blue-500 dark:hover:bg-blue-400"
      >
        Retry
      </button>
    </div>
  );
}
