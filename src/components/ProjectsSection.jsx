import React from "react";

const ProjectsSection = () => {
  const projects = [
    {
      id: 1,
      title: "Monarque Reality",
      description: "A full-stack real estate platform with user authentication and property management.",
      technologies: ["Next.js", "React", "Sanity", "Authentication", "PostgreSQL"],
      image: "/project-placeholder.png",
      liveLink: "#1",
      githubLink: "https://github.com/sharmasagarr/monarque-reality",
      featured: true
    },
    {
      id: 2,
      title: "Splitwise+",
      description: "A React Native app for effortless group expense tracking, real-time settlements, & user management.",
      technologies: ["React Native", "Firebase", "Node.js", "Redux", "PostgreSQL"],
      image: "/project-placeholder.png",
      liveLink: "#2",
      githubLink: "https://github.com/sharmasagarr/splitwise-plus",
      featured: true
    },
    {
      id: 3,
      title: "EchoWrites",
      description: "A online blogging plateform, where users can create their profile and share their thoughts and ideas.",
      technologies: ["Next.js", "TypeScript", "Sanity", "Authentication", "PostgreSQL"],
      image: "/echowrites.png",
      liveLink: "https://echowrites.vercel.app",
      githubLink: "https://github.com/sharmasagarr/echo-writes",
      featured: false
    },
    {
      id: 4,
      title: "Task Manager",
      description: "A full-stack app that allows users to create, assign, view, filter, and update tasks based on roles.",
      technologies: ["React", "Authentication", "MongoDB", "Node.js"],
      image: "/task-manager.png",
      liveLink: "https://sharmasagarr.github.io/taskmanager/",
      githubLink: "https://github.com/sharmasagarr/taskmanager",
      featured: false
    },
    {
      id: 5,
      title: "Assembly: Endgame",
      description: "The game challenges players to guess a random word with limited attempts — inspired by Hangman.",
      technologies: ["React", "Vite", "HTML/CSS", "Hooks"],
      image: "/assembly.png",
      liveLink: "https://sharmasagarr.github.io/assemblyEndgame/",
      githubLink: "https://github.com/sharmasagarr/assemblyEndgame",
      featured: false
    },
    {
      id: 6,
      title: "Tenzies Game",
      description: "A fun and addictive dice game built purely in React using functional components and React Hooks.",
      technologies: ["React", "Vite", "HTML/CSS", "Hooks"],
      image: "/tenzies.png",
      liveLink: "https://sharmasagarr.github.io/tenziesGame/",
      githubLink: "https://github.com/sharmasagarr/tenziesGame",
      featured: false
    },
    
  ];

  return (
    <section id="projects" className="w-full py-5 md:py-8">
      <div className="container mx-auto px-4 md:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 dark:text-white mb-4">
            My <span className="text-blue-600 dark:text-blue-400">Projects</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Some of my recent works that showcase my skills and expertise.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div 
              key={project.id} 
              className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden border border-gray-100 dark:border-gray-700 transition-all duration-300 hover:shadow-xl hover:-translate-y-2"
            >
              {/* Project Image */}
              <div id={`${project.id}`} className="relative overflow-hidden h-48">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
                {project.featured && (
                  <div className="absolute top-4 right-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white text-xs font-bold px-3 py-1 rounded-full">
                    Featured
                  </div>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-0 hover:opacity-70 transition-opacity duration-300 flex items-end">
                  <div className="p-4 opacity-0 hover:opacity-100 transition-opacity duration-300">
                    <div className="flex space-x-3">
                      <a 
                        href={project.liveLink} 
                        className="px-4 py-2 bg-white text-gray-800 rounded-lg text-sm font-medium hover:bg-gray-100 transition-colors"
                      >
                        Live Demo
                      </a>
                      <a 
                        href={project.githubLink} 
                        className="px-4 py-2 bg-gray-800 text-white rounded-lg text-sm font-medium hover:bg-gray-700 transition-colors"
                      >
                        GitHub
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {project.description}
                </p>
                
                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-5">
                  {project.technologies.map((tech, index) => (
                    <span 
                      key={index}
                      className="px-3 py-1 bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-300 rounded-full text-xs font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex justify-between items-center">
                  <a 
                    href={project.liveLink} 
                    className="flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors font-medium"
                  >
                    View Project
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </a>
                  <a 
                    href={project.githubLink} 
                    className="text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 transition-colors"
                    aria-label="GitHub Repository"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
                      <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View More Button */}
        <div className="text-center mt-12">
          <a href="https://github.com/sharmasagarr" className="px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium rounded-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 inline-flex items-center">
            View All Projects
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;