const ExperienceSection = () => {
  const experiences = [
    {
      id: 1,
      company: "Digilateral Solutions",
      position: "Full Stack Developer Intern",
      duration: "May 2025 - Present",
      location: "Malad(W), Mumbai",
      description: "Gaining hands-on experience in web and app development and digital solutions at a Mumbai-based marketing company.",
      technologies: ["React", "React Native", "JavaScript", "Node.js", "MongoDB", "PostgreSQL"],
    },
    {
      id: 2,
      company: "Freelance",
      position: "Web Developer",
      duration: "Jan 2025 - Apr 2025",
      location: "Remote",
      description: "Worked on various web development projects for clients, creating responsive websites and implementing custom functionality.",
      technologies: ["JavaScript", "Node.js", "React", "HTML/CSS", "MongoDB", "PostgreSQL"],
    },
    {
      id: 3,
      company: "University Projects",
      position: "Student Developer",
      duration: "Aug 2024 - Dec 2024",
      location: "Academic",
      description: "Developed several academic projects that focused on web development and software engineering principles.",
      technologies: ["Java", "Python", "C", "C++", "PHP", "MySQL", "HTML/CSS", "JavaScript"],
    }
  ];

  return (
    <section id="experience" className="w-full py-4 md:py-8">
      <div className="container mx-auto px-4 md:px-8">
        {/* Section Header - Matches Projects Section */}
        <div className="text-center mb-10 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 dark:text-white mb-4">
            My <span className="text-blue-600 dark:text-blue-400">Experience</span>
          </h2>
          <p className="text-sm md:text-base lg:text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            A timeline of my professional journey in the tech industry.
          </p>
        </div>

        {/* Experience Timeline */}
        <div className="max-w-4xl mx-auto">
          {experiences.map((exp, index) => (
            <div key={exp.id} className="relative flex mb-6 md:mb-12">
              {/* Timeline line and dot */}
              <div className="absolute left-0 top-8 bottom-0 w-0.5 bg-blue-200 dark:bg-blue-800/50 ml-2.5"></div>
              {index !== experiences.length - 1 && null}
              
              <div className="relative z-10 flex-shrink-0 text-sm md:text-base w-6 h-6 md:w-12 md:h-12 rounded-full bg-blue-600 dark:bg-blue-500 flex items-center justify-center text-white font-bold">
                {index + 1}
              </div>
              
              {/* Content Card */}
              <div className="ml-3 md:ml-6 flex-1">
                <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-100 dark:border-gray-700 hover:shadow-xl transition-shadow duration-300">
                  {/* Current Role Badge */}
                  {index === 0 && (
                    <div className="inline-block bg-gradient-to-r from-green-500 to-green-600 text-white text-xs font-bold px-3 py-1 rounded-full mb-2 md:mb-4">
                      Current Role
                    </div>
                  )}
                  
                  <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-2 md:mb-4">
                    <div>
                      <h3 className="text-lg md:text-xl font-bold text-gray-800 dark:text-white">
                        {exp.position}
                      </h3>
                      <p className="text-blue-600 text-sm md:text-base dark:text-blue-400 font-medium">
                        {exp.company}
                      </p>
                    </div>
                    <p className="text-gray-500 dark:text-gray-400 text-sm mt-2 md:mt-0">
                      {exp.duration}
                    </p>
                  </div>
                  
                  <p className="text-sm md:text-base text-gray-600 dark:text-gray-300 mb-5">
                    {exp.description}
                  </p>
                  
                  <p className="text-gray-500 dark:text-gray-400 text-sm mb-4">
                    {exp.location}
                  </p>
                  
                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech, techIndex) => (
                      <span 
                        key={techIndex}
                        className="px-3 py-1 bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-300 rounded-full text-xs font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="text-center mt-12">
          <a 
            className="px-8 w-full md:w-[80%] lg:w-[30%] justify-center py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium rounded-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 inline-flex items-center"
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
    </section>
  );
};

export default ExperienceSection;