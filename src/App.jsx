import NavBar from './components/NavBar'
import './App.css'
import Intro from './components/Intro'
import AboutMe from './components/AboutMe'
import Skills from './components/Skills'
import Services from './components/Services'
import WorkExperience from './components/WorkExperience'
function App() {

  return (
    <div className=' flex flex-col h-screen w-full'>
        <NavBar/>
        <Intro/>
        <AboutMe/>
        <Skills/>
        <Services/>
        <WorkExperience/>
    </div>
    
  )
}

export default App
