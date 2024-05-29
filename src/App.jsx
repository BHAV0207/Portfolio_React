import NavBar from './components/NavBar'
import './App.css'
import Intro from './components/Intro'
import AboutMe from './components/AboutMe'
import Skills from './components/Skills'
function App() {

  return (
    <div className=' flex flex-col h-screen w-full'>
        <NavBar/>
        <Intro/>
        <AboutMe/>
        <Skills/>
    </div>
    
  )
}

export default App
