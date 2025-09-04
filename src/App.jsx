import { useEffect, useState } from "react";
import HeaderSection from './components/HeaderSection'
import HeroSection from './components/HeroSection'
import AboutSection from './components/AboutSection'
import ExperienceSection from './components/ExperienceSection'
import ProjectsSection from './components/ProjectsSection'
import SkillsSection from './components/SkillsSection'
import ContactSection from './components/ContactSection'
import FooterSection from './components/FooterSection'

function App() {
  const [isOffline, setIsOffline] = useState(!navigator.onLine);

  useEffect(() => {
    const goOffline = () => setIsOffline(true);
    const goOnline = () => setIsOffline(false);

    window.addEventListener("offline", goOffline);
    window.addEventListener("online", goOnline);

    return () => {
      window.removeEventListener("offline", goOffline);
      window.removeEventListener("online", goOnline);
    };
  }, []);

  if (isOffline) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-white dark:bg-slate-900">
        <lottie-player
          src="/images/no-internet.json"
          background="transparent"
          speed="1"
          style={{ width: "300px", height: "300px" }}
          loop
          autoplay
        ></lottie-player>
        <h1 className="text-xl font-semibold mt-6 dark:text-white">
          No Internet Connection
        </h1>
        <p className="text-gray-500 dark:text-gray-400">
          Please check your network and try again.
        </p>
      </div>
    );
  }
  return (
    <div className='bg-gradient-to-b from-gray-50 to-blue-50 dark:from-gray-900 dark:to-gray-800'>
      <HeaderSection />
      <HeroSection />
      <AboutSection />
      <ExperienceSection />
      <ProjectsSection />
      <SkillsSection />
      <ContactSection />
      <FooterSection />
    </div>
  )
}

export default App
