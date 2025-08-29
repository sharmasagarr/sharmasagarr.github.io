import './App.css'
import HeaderSection from './components/HeaderSection'
import HeroSection from './components/HeroSection'
import AboutSection from './components/AboutSection'
import ExperienceSection from './components/ExperienceSection'
import ProjectsSection from './components/ProjectsSection'
import SkillsSection from './components/SkillsSection'
import ContactSection from './components/ContactSection'
import FooterSection from './components/FooterSection'

function App() {

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
