import React from "react";

const HeroSection = () => {
  return (
    <section id="home" className="w-full min-h-screen flex items-center pt-20 pb-10">
      <div className="container mx-auto px-4 md:px-8 relative">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12">
          
          {/* Left Side - Text Content */}
          <div className="flex-1 animate-fadeInLeft order-2 md:order-1">
            <p className="text-lg font-medium niconne-regular text-blue-600 dark:text-blue-400 mb-2">hello, I'm</p>
            
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 dark:text-white mb-4 tracking-wider">
              Sagar <br /><span className="text-blue-600 dark:text-blue-400">Sharma</span>
            </h1>
            
            <div className="flex items-center mb-6">
              <div className="w-4 h-0.5 bg-blue-600 mr-2"></div>
              <p className="text-lg text-gray-600 dark:text-gray-300 font-medium">
                Full Stack Developer
              </p>
            </div>
            
            <p className="text-md text-gray-600 dark:text-gray-300 max-w-xl mb-5 leading-relaxed">
              I craft seamless digital experiences and bring ideas to life with clean, 
              responsive, and modern web development. Passionate about creating solutions 
              that make a difference.
            </p>
            
            <div className="mb-5">
              <p className="text-gray-700 dark:text-gray-200">
                Have an exciting <span className="font-bold text-blue-600 dark:text-blue-400 underline">project</span> in mind?
              </p>
            </div>

            {/* Buttons */}
            <div className="flex gap-4 mb-6 md:mb-0">
              <a href="#contact" className="w-full md:w-[40%] justify-center px-4 md:px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium rounded-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 flex items-center">
                Let's Talk
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </a>
              
              <a
                href="/Sagar_Sharma_Resume.pdf"
                download="Sagar_Sharma_Resume.pdf"
                className="w-full md:w-[40%] justify-center px-4 md:px-6 py-3 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-200 font-medium rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-300 flex items-center"
              >                Resume
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </a>
            </div>
          </div>

          {/* Right Side - Image/Illustration */}
          <div className="flex-1 flex items-center justify-center order-1 md:order-2 relative">
            <div className="relative w-60 h-60 md:w-80 md:h-80">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full blur-xl opacity-20 animate-pulse"></div>
              <div className="relative bg-white dark:bg-gray-800 rounded-3xl shadow-2xl flex items-center justify-center h-full w-full border-4 border-white dark:border-gray-700">
                <img
                  src="/hero-image.svg"
                  alt="Sagar Sharma - Full Stack Developer"
                  className="w-full h-full object-cover rounded-2xl"
                />
                {/* Decorative elements */}
                <div className="absolute -top-4 -right-4 w-10 h-10 md:w-16 md:h-16 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold shadow-lg">
                  SS
                </div>
                <div className="absolute -bottom-3 -left-3 md:-bottom-3 md:-left-3 w-6 h-6 md:w-10 md:h-10 bg-purple-500 rounded-full flex items-center justify-center text-white font-bold shadow-lg">
                  SS
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-gray-400 dark:bg-white mt-10 z-0 absolute right-0 h-[1px] w-[99svw] -translate-x-1/2 left-1/2"></div>

        {/* Social Widget */}
        <div className="flex justify-center relative z-10 mt-2">
          <div className="flex justify-center gap-6 bg-white dark:bg-gray-800 rounded-full shadow-lg px-8 py-3 border-1 border-gray-500 dark:border-gray-100">
            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/sharmasagar79"
              className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-200 dark:bg-gray-700 hover:bg-blue-100 dark:hover:bg-gray-600 hover:-translate-y-1 transition-all duration-300"
              aria-label="LinkedIn"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-linkedin dark:text-white" viewBox="0 0 16 16">
                <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z"/>
              </svg>
            </a>
            
            {/* GitHub */}
            <a
              href="https://github.com/sharmasagarr"
              className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-200 dark:bg-gray-700 hover:bg-blue-100 dark:hover:bg-gray-600 hover:-translate-y-1 transition-all duration-300"
              aria-label="GitHub"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-github dark:text-white" viewBox="0 0 16 16">
                <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8"/>
              </svg>
            </a>
            
            {/* Twitter */}
            <a
              href="https://x.com/sharmasagar79"
              className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-200 dark:bg-gray-700 hover:bg-blue-100 dark:hover:bg-gray-600 hover:-translate-y-1 transition-all duration-300"
              aria-label="Twitter"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-twitter-x dark:text-white" viewBox="0 0 16 16">
                <path d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865z"/>
              </svg>
            </a>
            
            {/* Instagram */}
            <a
              href="https://www.instagram.com/sharma.sagar79"
              className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-200 dark:bg-gray-700 hover:bg-blue-100 dark:hover:bg-gray-600 hover:-translate-y-1 transition-all duration-300"
              aria-label="Instagram"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-instagram dark:text-white" viewBox="0 0 16 16">
                <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.9 3.9 0 0 0-1.417.923A3.9 3.9 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.9 3.9 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.9 3.9 0 0 0-.923-1.417A3.9 3.9 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599s.453.546.598.92c.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.5 2.5 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.5 2.5 0 0 1-.92-.598 2.5 2.5 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233s.008-2.388.046-3.231c.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92s.546-.453.92-.598c.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92m-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217m0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;