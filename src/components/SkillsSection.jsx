import { useState } from "react";
import { FaReact, FaNode, FaGithub, FaPython, FaAws, FaDocker } from "react-icons/fa";
import { SiPostgresql, SiMongodb, SiJavascript, SiTypescript, SiSocketdotio, SiExpress, SiTailwindcss, SiRedux, SiGraphql, SiFirebase, SiPostman, SiHtml5 } from "react-icons/si";
import { TbBrandReactNative } from "react-icons/tb";
import { AiFillApi } from "react-icons/ai";
import { GrIntegration } from "react-icons/gr";
import { RiNextjsFill } from "react-icons/ri";

const SkillsSection = () => {
  const [activeTab, setActiveTab] = useState(0);
  
  const skills = [
    {
      id: 1,
      category: "Frontend",
      fullCategory: "Frontend",
      technologies: [
        { name: "React", level: 95, icon: <FaReact /> },
        { name: "React Native", level: 95, icon: <TbBrandReactNative /> },
        { name: "Next.js", level: 85, icon: <RiNextjsFill /> },
        { name: "JavaScript", level: 90, icon: <SiJavascript /> },
        { name: "TypeScript", level: 80, icon: <SiTypescript /> },
        { name: "Tailwind CSS", level: 85, icon: <SiTailwindcss /> },
        { name: "Redux", level: 85, icon: <SiRedux /> },
        { name: "HTML/CSS", level: 90, icon: <SiHtml5 /> }
      ],
      icon: "💻",
      color: "blue"
    },
    {
      id: 2,
      category: "Backend",
      fullCategory: "Backend",
      technologies: [
        { name: "Node.js", level: 88, icon: <FaNode /> },
        { name: "Express", level: 85, icon: <SiExpress /> },
        { name: "MongoDB", level: 80, icon: <SiMongodb /> },
        { name: "PostgreSQL", level: 75, icon: <SiPostgresql /> },
        { name: "REST APIs", level: 90, icon: <AiFillApi /> },
        { name: "GraphQL", level: 70, icon: <SiGraphql /> },
        { name: "Socket.io", level: 75, icon: <SiSocketdotio /> },
        { name: "Python", level: 80, icon: <FaPython /> }

      ],
      icon: "⚙️",
      color: "purple"
    },
    {
      id: 3,
      category: "Tools",
      fullCategory: "Tools & Others",
      technologies: [
        { name: "Git/GitHub", level: 90, icon: <FaGithub /> },
        { name: "Postman", level: 80, icon: <SiPostman /> },
        { name: "AWS", level: 70, icon: <FaAws /> },
        { name: "Docker", level: 65, icon: <FaDocker /> },
        { name: "Firebase", level: 80, icon: <SiFirebase /> },
        { name: "CI/CD", level: 70 , icon: <GrIntegration /> }
      ],
      icon: "🛠️",
      color: "amber"
    }
  ];

  const experiences = [
    "1+ years of web development experience",
    "06+ months of android & ios application development experience",
    "Delivered 10+ successful projects",
    "Certified Python Developer"
  ];

  const getColorClass = (color) => {
    const colors = {
      blue: "bg-blue-500",
      purple: "bg-purple-500",
      amber: "bg-amber-500"
    };
    return colors[color] || "bg-blue-500";
  };

  const getGradientClass = (color) => {
    const gradients = {
      blue: "from-blue-400 to-blue-600",
      purple: "from-purple-400 to-purple-600",
      amber: "from-amber-400 to-amber-600"
    };
    return gradients[color] || "from-blue-400 to-blue-600";
  };

  return (
    <section id="skills" className="w-full py-4 md:py-8">
      <div className="container mx-auto px-4 md:px-8">
        {/* Section Header */}
        <div className="text-center mb-4 md:mb-8">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 dark:text-white mb-4">
            My <span className="text-blue-600 dark:text-blue-400">Skills</span>
          </h2>
          <p className="text-sm md:text-base lg:text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto px-2">
            Comprehensive overview of my technical skills.
          </p>
        </div>

        {/* Tab Navigation - Mobile optimized */}
        <div className="flex justify-center mb-4 md:mb-8">
          <div className="flex flex-row justify-center bg-white dark:bg-gray-800 rounded-xl p-1 shadow-md border border-gray-100 dark:border-gray-700 w-full sm:w-[50%]">
            {skills.map((skill, index) => (
              <button
                key={skill.id}
                onClick={() => setActiveTab(index)}
                className={`w-full px-4 py-3 sm:px-6 sm:py-3 rounded-lg font-medium transition-all duration-300 flex items-center justify-center ${
                  activeTab === index
                    ? `${getColorClass(skill.color)} text-white shadow`
                    : "text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
                }`}
              >

                <span className="hidden lg:inline">{skill.fullCategory}</span>
                <span className="flex lg:hidden">{skill.category}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Skills Content */}
        <div className="mb-8 md:mb-16">
          {skills.map((skillCategory, index) => (
            <div
              key={skillCategory.id}
              className={`transition-all duration-500 ${
                activeTab === index ? "block" : "hidden"
              }`}
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
                {/* Skills Visualization */}
                <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-5 md:p-6 border border-gray-100 dark:border-gray-700">
                  <h3 className="text-lg md:text-xl font-bold text-gray-800 dark:text-white mb-4 md:mb-6 flex items-center">
                    <span className="mr-2">{skillCategory.icon}</span>
                    <span className="hidden sm:inline">{skillCategory.fullCategory}</span>
                    <span className="sm:hidden">{skillCategory.category}</span>
                  </h3>
                  
                  <div className="space-y-3">
                    {skillCategory.technologies.map((skill, idx) => (
                      <div key={idx}>
                        <div className="flex justify-between mb-1 md:mb-2">
                          <span className="text-xs sm:text-sm font-medium text-gray-700 dark:text-gray-300">
                            {skill.name}
                          </span>
                          <span className="text-xs sm:text-sm font-medium text-gray-500 dark:text-gray-400">
                            {skill.level}%
                          </span>
                        </div>
                        <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2 md:h-3">
                          <div 
                            className={`h-2 md:h-3 rounded-full bg-gradient-to-r ${getGradientClass(skillCategory.color)}`}
                            style={{ width: `${skill.level}%` }}
                          ></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                
                {/* Skill Icons Grid */}
                <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-5 md:p-6 border border-gray-100 dark:border-gray-700">
                  <h3 className="text-lg md:text-xl font-bold text-gray-800 dark:text-white mb-4 md:mb-6">
                    Technology Proficiency
                  </h3>
                  
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 md:gap-4">
                    {skillCategory.technologies.map((skill, idx) => (
                      <div 
                        key={idx}
                        className="flex flex-col items-center p-3 md:p-4 bg-gray-50 dark:bg-gray-700 rounded-lg md:rounded-xl transition-transform duration-300 hover:scale-105"
                      >
                        <div className={`w-10 h-10 md:w-14 md:h-14 rounded-full ${getColorClass(skillCategory.color)} flex items-center justify-center text-white text-lg md:text-xl mb-1 md:mb-2`}>
                          {skill.icon}
                        </div>
                        <span className="text-xs sm:text-sm font-medium text-gray-700 dark:text-gray-200 text-center">
                          {skill.name}
                        </span>
                        <span className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                          {skill.level}%
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {/* Experience */}
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-5 md:p-6 border border-gray-100 dark:border-gray-700">
            <h3 className="text-lg md:text-xl font-bold text-gray-800 dark:text-white mb-4 md:mb-6 flex items-center">
              <span className="text-blue-600 dark:text-blue-400 mr-2">📈</span>{" "}
              Experience & Achievements
            </h3>
            
            <div className="space-y-3 md:space-y-2">
              {experiences.map((exp, idx) => (
                <div key={idx} className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <p className="text-sm md:text-base text-gray-600 dark:text-gray-300">{exp}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Call to Action */}
          <div className="bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl shadow-lg p-5 md:p-6 text-white relative overflow-hidden">
            <div className="absolute -right-4 -top-4 w-16 h-16 md:w-24 md:h-24 rounded-full bg-white opacity-10"></div>
            <div className="absolute -right-6 -bottom-6 w-20 h-20 md:w-32 md:h-32 rounded-full bg-white opacity-10"></div>
            
            <h3 className="text-lg md:text-xl font-bold mb-3 md:mb-4 relative z-10">Let's Work Together!</h3>
            <p className="mb-4 md:mb-6 text-sm md:text-base relative z-10">
                I'm always interested in new challenges and opportunities to grow my skills. 
                Whether it's building innovative applications, solving complex problems, 
                or collaborating with talented teams.
            </p>
            <a href="#contact" className="px-4 py-2 md:px-6 md:py-3 bg-white text-gray-800 font-medium rounded-lg text-sm md:text-base shadow-lg hover:bg-gray-100 transition-colors duration-300 relative z-10 w-full sm:w-auto">
              Contact Me
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;