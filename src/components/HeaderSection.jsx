import { useState, useEffect } from "react";
import { useTheme } from "../hooks/useTheme";

export default function HeaderSection() {
  const { theme, setTheme, toggleTheme, toggleLightTheme, toggleDarkTheme, resetToSystem } = useTheme();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [hidden, setHidden] = useState(false); // state for header visibility

  useEffect(() => {
    let timeoutId;

    const handleScroll = () => {
      if (window.scrollY === 0) {
        // always visible at top
        setHidden(false);
        return;
      }

      setHidden(true); // hide while scrolling

      clearTimeout(timeoutId); // reset timer
      timeoutId = setTimeout(() => {
        setHidden(false); // show again after scroll stops
      }, 250); // delay for "stop scrolling"
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearTimeout(timeoutId);
    };
  }, []);

  // Detect screen width & force light/dark if theme === "system"
  useEffect(() => {
    const handleResize = () => {
      const isMobile = window.innerWidth < 768;

      if (isMobile && theme === "system") {
        // Detect system preference
        const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
        setTheme(prefersDark ? "dark" : "light");
      }
    };

    // Run immediately on mount
    handleResize();

    // Also run on resize
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [theme, setTheme]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 
                  bg-white/80 dark:bg-gray-900/80 backdrop-blur-md 
                  border-b border-gray-200 dark:border-gray-800 
                  transition-transform duration-500 
                  ${hidden ? "-translate-y-full" : "translate-y-0"}`}
    >
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          {/* Logo/Name */}
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 md:w-10 md:h-10 rounded-lg bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center shadow-md">
              <span className="text-white font-bold text-md md:text-xl">SS</span>
            </div>
            <span className="text-lg md:text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400">
              Sagar Sharma
            </span>
          </div>

          {/* Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            <a
              href="#home"
              className="relative px-4 py-2 font-medium text-gray-700 dark:text-gray-300 
                        hover:text-blue-600 dark:hover:text-blue-400
                        transition-colors duration-200 
                        after:content-[''] after:absolute after:left-1/2 after:-bottom-1 
                        after:h-[2px] after:w-0 after:bg-blue-600 dark:after:bg-blue-400 
                        after:transition-all after:duration-300 after:ease-out 
                        hover:after:left-0 hover:after:w-full"
            >
              Home
            </a>
            <a 
              href="#about"
              className="relative px-4 py-2 font-medium text-gray-700 dark:text-gray-300 
                        hover:text-blue-600 dark:hover:text-blue-400
                        transition-colors duration-200 
                        after:content-[''] after:absolute after:left-1/2 after:-bottom-1 
                        after:h-[2px] after:w-0 after:bg-blue-600 dark:after:bg-blue-400 
                        after:transition-all after:duration-300 after:ease-out 
                        hover:after:left-0 hover:after:w-full"
              >
              About
            </a>
            <a 
              href="#experience"
              className="relative px-4 py-2 font-medium text-gray-700 dark:text-gray-300 
                        hover:text-blue-600 dark:hover:text-blue-400
                        transition-colors duration-200 
                        after:content-[''] after:absolute after:left-1/2 after:-bottom-1 
                        after:h-[2px] after:w-0 after:bg-blue-600 dark:after:bg-blue-400 
                        after:transition-all after:duration-300 after:ease-out 
                        hover:after:left-0 hover:after:w-full"
              >
              Experience
            </a>
            <a
              href="#projects"
              className="relative px-4 py-2 font-medium text-gray-700 dark:text-gray-300 
                        hover:text-blue-600 dark:hover:text-blue-400
                        transition-colors duration-200 
                        after:content-[''] after:absolute after:left-1/2 after:-bottom-1 
                        after:h-[2px] after:w-0 after:bg-blue-600 dark:after:bg-blue-400 
                        after:transition-all after:duration-300 after:ease-out 
                        hover:after:left-0 hover:after:w-full"
            >
              Projects
            </a>
            <a
              href="#skills"
              className="relative px-4 py-2 font-medium text-gray-700 dark:text-gray-300 
                        hover:text-blue-600 dark:hover:text-blue-400
                        transition-colors duration-200 
                        after:content-[''] after:absolute after:left-1/2 after:-bottom-1 
                        after:h-[2px] after:w-0 after:bg-blue-600 dark:after:bg-blue-400 
                        after:transition-all after:duration-300 after:ease-out 
                        hover:after:left-0 hover:after:w-full"
            >
              Skills
            </a>
            <a
              href="#contact"
              className="relative px-4 py-2 font-medium text-gray-700 dark:text-gray-300 
                        hover:text-blue-600 dark:hover:text-blue-400
                        transition-colors duration-200 
                        after:content-[''] after:absolute after:left-1/2 after:-bottom-1 
                        after:h-[2px] after:w-0 after:bg-blue-600 dark:after:bg-blue-400 
                        after:transition-all after:duration-300 after:ease-out 
                        hover:after:left-0 hover:after:w-full"
            >
              Contact
            </a>
          </nav>

          {/* Theme Controls */}
          <div className="flex items-center space-x-3">
            {/* For larger screens */}
            <div
              className="border border-gray-400 dark:border-gray-700 relative hidden z-0 md:inline-grid grid-cols-3 gap-0.5 rounded-full bg-gray-200/50 dark:bg-gray-700/50 p-0.75"
              role="radiogroup"
            >
              {/* System Theme */}
              <button
                onClick={resetToSystem}
                aria-label="System theme"
                className={`rounded-full p-1 w-7 h-7 flex items-center justify-center transition-all ${
                  theme === 'system' 
                    ? 'bg-white dark:bg-gray-800 ring-1 ring-gray-300 dark:ring-gray-600 text-gray-900 dark:text-white' 
                    : 'text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200'
                }`}
              >
                <svg viewBox="0 0 28 28" fill="none" className="w-6 h-6">
                  <path
                    d="M7.5 8.5C7.5 7.94772 7.94772 7.5 8.5 7.5H19.5C20.0523 7.5 20.5 7.94772 20.5 8.5V16.5C20.5 17.0523 20.0523 17.5 19.5 17.5H8.5C7.94772 17.5 7.5 17.0523 7.5 16.5V8.5Z"
                    stroke="currentColor"
                    strokeWidth="1.5"
                  />
                  <path
                    d="M16.5 20.5V17.5H11.5V20.5M16.5 20.5H11.5M16.5 20.5H17.5M11.5 20.5H10.5"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  />
                </svg>
              </button>

              {/* Light Theme */}
              <button
                onClick={toggleLightTheme}
                aria-label="Light theme"
                className={`rounded-full p-1 w-7 h-7 flex items-center justify-center transition-all ${
                  theme === 'light'
                    ? 'bg-white dark:bg-gray-800 ring-1 ring-gray-300 dark:ring-gray-600 text-gray-900 dark:text-white'
                    : 'text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200'
                }`}
              >
                <svg viewBox="0 0 28 28" fill="none" className="w-6 h-6">
                  <circle cx="14" cy="14" r="3.5" stroke="currentColor" strokeWidth="1.5" />
                  <path d="M14 8.5V6.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                  <path
                    d="M17.889 10.1115L19.3032 8.69727"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  />
                  <path d="M19.5 14L21.5 14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                  <path
                    d="M17.889 17.8885L19.3032 19.3027"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  />
                  <path d="M14 21.5V19.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                  <path
                    d="M8.69663 19.3029L10.1108 17.8887"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  />
                  <path d="M6.5 14L8.5 14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                  <path
                    d="M8.69663 8.69711L10.1108 10.1113"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  />
                </svg>
              </button>

              {/* Dark Theme */}
              <button
                onClick={toggleDarkTheme}
                aria-label="Dark theme"
                className={`rounded-full p-1 w-7 h-7 flex items-center justify-center transition-all ${
                  theme === 'dark' 
                    ? 'bg-white dark:bg-gray-800 ring-1 ring-gray-300 dark:ring-gray-600 text-gray-900 dark:text-white' 
                    : 'text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200'
                }`}
              >
                <svg viewBox="0 0 28 28" fill="none" className="w-6 h-6">
                  <path
                    d="M10.5 9.99914C10.5 14.1413 13.8579 17.4991 18 17.4991C19.0332 17.4991 20.0176 17.2902 20.9132 16.9123C19.7761 19.6075 17.109 21.4991 14 21.4991C9.85786 21.4991 6.5 18.1413 6.5 13.9991C6.5 10.8902 8.39167 8.22304 11.0868 7.08594C10.7089 7.98159 10.5 8.96597 10.5 9.99914Z"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M16.3561 6.50754L16.5 5.5L16.6439 6.50754C16.7068 6.94752 17.0525 7.29321 17.4925 7.35607L18.5 7.5L17.4925 7.64393C17.0525 7.70679 16.7068 8.05248 16.6439 8.49246L16.5 9.5L16.3561 8.49246C16.2932 8.05248 15.9475 7.70679 15.5075 7.64393L14.5 7.5L15.5075 7.35607C15.9475 7.29321 16.2932 6.94752 16.3561 6.50754Z"
                    fill="currentColor"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M20.3561 11.5075L20.5 10.5L20.6439 11.5075C20.7068 11.9475 21.0525 12.2932 21.4925 12.3561L22.5 12.5L21.4925 12.6439C21.0525 12.7068 20.7068 13.0525 20.6439 13.4925L20.5 14.5L20.3561 13.4925C20.2932 13.0525 19.9475 12.7068 19.5075 12.6439L18.5 12.5L19.5075 12.3561C19.9475 12.2932 20.2932 11.9475 20.3561 11.5075Z"
                    fill="currentColor"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>

            {/* For smaller screens (only one button, cycles themes) */}
            <button
              onClick={toggleTheme}
              aria-label="Toggle theme"
              className="md:hidden p-1 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600 transition-all"
            >
              {theme === "system" && (
                <svg viewBox="0 0 28 28" fill="none" className="w-6 h-6">
                  <path
                    d="M7.5 8.5C7.5 7.94772 7.94772 7.5 8.5 7.5H19.5C20.0523 7.5 20.5 7.94772 20.5 8.5V16.5C20.5 17.0523 20.0523 17.5 19.5 17.5H8.5C7.94772 17.5 7.5 17.0523 7.5 16.5V8.5Z"
                    stroke="currentColor"
                    strokeWidth="1.5"
                  />
                  <path
                    d="M16.5 20.5V17.5H11.5V20.5M16.5 20.5H11.5M16.5 20.5H17.5M11.5 20.5H10.5"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  />
                </svg>
              )}
              {theme === "light" && (
                <svg viewBox="0 0 28 28" fill="none" className="w-6 h-6">
                  <circle cx="14" cy="14" r="3.5" stroke="currentColor" strokeWidth="1.5" />
                  <path d="M14 8.5V6.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                  <path
                    d="M17.889 10.1115L19.3032 8.69727"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  />
                  <path d="M19.5 14L21.5 14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                  <path
                    d="M17.889 17.8885L19.3032 19.3027"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  />
                  <path d="M14 21.5V19.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                  <path
                    d="M8.69663 19.3029L10.1108 17.8887"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  />
                  <path d="M6.5 14L8.5 14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                  <path
                    d="M8.69663 8.69711L10.1108 10.1113"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  />
                </svg>
              )}
              {theme === "dark" && (
                <svg viewBox="0 0 28 28" fill="none" className="w-6 h-6">
                  <path
                    d="M10.5 9.99914C10.5 14.1413 13.8579 17.4991 18 17.4991C19.0332 17.4991 20.0176 17.2902 20.9132 16.9123C19.7761 19.6075 17.109 21.4991 14 21.4991C9.85786 21.4991 6.5 18.1413 6.5 13.9991C6.5 10.8902 8.39167 8.22304 11.0868 7.08594C10.7089 7.98159 10.5 8.96597 10.5 9.99914Z"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M16.3561 6.50754L16.5 5.5L16.6439 6.50754C16.7068 6.94752 17.0525 7.29321 17.4925 7.35607L18.5 7.5L17.4925 7.64393C17.0525 7.70679 16.7068 8.05248 16.6439 8.49246L16.5 9.5L16.3561 8.49246C16.2932 8.05248 15.9475 7.70679 15.5075 7.64393L14.5 7.5L15.5075 7.35607C15.9475 7.29321 16.2932 6.94752 16.3561 6.50754Z"
                    fill="currentColor"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M20.3561 11.5075L20.5 10.5L20.6439 11.5075C20.7068 11.9475 21.0525 12.2932 21.4925 12.3561L22.5 12.5L21.4925 12.6439C21.0525 12.7068 20.7068 13.0525 20.6439 13.4925L20.5 14.5L20.3561 13.4925C20.2932 13.0525 19.9475 12.7068 19.5075 12.6439L18.5 12.5L19.5075 12.3561C19.9475 12.2932 20.2932 11.9475 20.3561 11.5075Z"
                    fill="currentColor"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              )}
            </button>
            
            {/* Mobile menu button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-200"
            >
              <span className="relative block w-6 h-6">
                {/* Top bar */}
                <span
                  className={`absolute left-0 h-0.5 w-6 bg-black dark:bg-white rounded-full transform transition-all duration-500 ease-[cubic-bezier(0.68,-0.55,0.27,1.55)] ${
                    mobileMenuOpen ? "rotate-45 top-3" : "rotate-0 top-1"
                  }`}
                ></span>

                {/* Middle bar */}
                <span
                  className={`absolute left-0 h-0.5 w-6 bg-black dark:bg-white rounded-full transform transition-all duration-300 ease-in-out ${
                    mobileMenuOpen ? "opacity-0 translate-x-4 top-3" : "opacity-100 top-3"
                  }`}
                ></span>

                {/* Bottom bar */}
                <span
                  className={`absolute left-0 h-0.5 w-6 bg-black dark:bg-white rounded-full transform transition-all duration-500 ease-[cubic-bezier(0.68,-0.55,0.27,1.55)] ${
                    mobileMenuOpen ? "-rotate-45 top-3" : "rotate-0 top-5"
                  }`}
                ></span>
              </span>
            </button>
          </div>
        </div>
        {/* Mobile navigation dropdown */}
        <div className={`lg:hidden overflow-hidden transition-all duration-500 ease-in-out ${mobileMenuOpen ? "max-h-96" : "max-h-0"}`}>
          <nav className="mt-3 space-y-2 pb-3">
            {["Home", "About", "Experience", "Projects", "Skills", "Contact"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                onClick={() => setMobileMenuOpen(false)}
                className="block border-b border-gray-300 dark:border-gray-500 px-4 py-2 rounded-lg font-medium text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-100 dark:hover:bg-gray-800 transform transition-transform duration-300 hover:scale-105"
              >
                {item}
              </a>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
}