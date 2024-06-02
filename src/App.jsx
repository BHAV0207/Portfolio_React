import NavBar from './components/NavBar'
import './App.css'
import Intro from './components/Intro'
import AboutMe from './components/AboutMe'
import Skills from './components/Skills'
import Services from './components/Services'
import AcademicQualifications from './components/AcademicQualifications'
import WorkExperience from './components/WorkExperience'
import ProjectsBuilt from './components/ProjectsBuilt'
import Achievements from './components/Achievemrnts'
import ContactMe from './components/ContactMe'
import { useRef } from 'react'

function App() {

  const main = useRef(null);

  const handleLoad = () => {
    main.current.classList.add('animate-loading');
  }

  return (
    <div onLoad={handleLoad} ref={main} className='flex flex-col h-screen w-full'>
        <NavBar/>
        <Intro/>
        <AboutMe/>
        <Skills/>
        <ProjectsBuilt/>
        <Services/>
        <WorkExperience/>
        <AcademicQualifications/>
        <Achievements/>
        <ContactMe/>
    </div>
    
  )
}

export default App
