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
function App() {

  return (
    <div className=' flex flex-col h-screen w-full'>
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
