const AboutSection = () => {
  return (
    <section id="about" className="w-full py-5 md:py-8">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 md:gap-16">
          
          {/* Left Side - Image/Illustration */}
          <div className="flex-1 flex items-center justify-center relative">
            <div className="relative max-w-md">
              <div className="absolute -top-4 -left-4 w-full h-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-3xl opacity-10 animate-pulse"></div>
              <div className="absolute -bottom-4 -right-4 w-full h-full bg-gradient-to-r from-purple-500 to-pink-500 rounded-3xl opacity-10 animate-pulse delay-1000"></div>
              
              <div className="relative bg-white dark:bg-gray-800 rounded-3xl shadow-2xl flex items-center justify-center p-8 h-full w-full border-4 border-white dark:border-gray-700 overflow-hidden">
                <div className="w-full h-full bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-900 dark:to-purple-900 rounded-2xl flex items-center justify-center">
                  <div className="text-center w-full h-full">
                    <picture>
                      {/* Priority order: AVIF → WebP → JPEG */}
                      <source srcSet="/images/profile.avif" type="image/avif" />
                      <source srcSet="/images/profile.webp" type="image/webp" />
                      <img
                        src="/images/profile.jpg"
                        alt="Sagar Sharma - Full Stack Developer"
                        className="w-full h-full object-cover rounded-2xl"
                        loading="lazy"
                        decoding="async"
                      />
                    </picture>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Text Content */}
          <div className="flex-1">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 dark:text-white mb-6">
              About <span className="text-blue-600 dark:text-blue-400">Me</span>
            </h2>     
            <div className="mb-8">
              <p className="text-sm md:text-base lg:text-lg text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                I'm a Full Stack Developer with expertise in creating dynamic, 
                user-friendly web and android applications. With a strong foundation in both front-end and 
                back-end technologies, I bring ideas to life with clean, efficient code.
              </p>
            </div>

            {/* Skills/Technologies */}
            <div className="mb-10">
              <h3 className="text-base md:text-base lg:text-xl font-semibold text-gray-800 dark:text-white mb-4">Technologies I Work With</h3>
              
              <div className="grid grid-cols-3 md:grid-cols-4 gap-2">
                <span className="flex-1 py-2 text-center bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full text-sm font-medium">
                  React
                </span>
                <span className="flex-1 py-2 text-center bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 rounded-full text-sm font-medium">
                  Node.js
                </span>
                <span className="flex-1 py-2 text-center bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 rounded-full text-sm font-medium">
                  React Native
                </span>
                <span className="flex-1 py-2 text-center bg-amber-100 dark:bg-amber-900/30 text-amber-700 dark:text-amber-300 rounded-full text-sm font-medium">
                  JavaScript
                </span>
                <span className="flex-1 py-2 text-center bg-yellow-100 dark:bg-yellow-900/30 text-yellow-700 dark:text-yellow-300 rounded-full text-sm font-medium">
                  TypeScript
                </span>
                <span className="flex-1 py-2 text-center bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-300 rounded-full text-sm font-medium">
                  PostgreSQL
                </span>
                <span className="flex-1 py-2 text-center bg-amber-100 dark:bg-amber-900/30 text-amber-700 dark:text-amber-300 rounded-full text-sm font-medium">
                  MongoDB
                </span>
                <span className="flex-1 py-2 text-center bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 rounded-full text-sm font-medium">
                  Socket.io
                </span>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-10">
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-blue-600 dark:text-blue-400 mb-1">10+</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Projects</div>
              </div>
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-purple-600 dark:text-purple-400 mb-1">1+</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-green-600 dark:text-green-400 mb-1">10+</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Clients</div>
              </div>
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-yellow-600 dark:text-yellow-400 mb-1">99%</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Satisfaction</div>
              </div>
            </div>

            {/* CTA Button */}
            <div className="flex justify-center lg:justify-start mt-12">
              <a 
                className="px-8 w-full md:w-[80%] lg:w-[60%] justify-center py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium rounded-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 inline-flex items-center"
                href="/resume/Sagar_Sharma_Resume.pdf"
                download="Sagar_Sharma_Resume.pdf"
              >
                Download Resume
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;