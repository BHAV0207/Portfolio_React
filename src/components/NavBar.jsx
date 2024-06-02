// import { useState, useEffect } from "react";
import "./NavBar.css"; 
import Intro from "./Intro";
import AboutMe from "./AboutMe";
import Skills from "./Skills";
function NavBar(){

    // const [isNavbarFixed, setIsNavbarFixed] = useState(true);

    // useEffect(() => {
    //     const handleScroll = () => {
    //     const scrollY = window.scrollY;
    //     // Change threshold as needed
    //     if (scrollY > 300) {
    //         setIsNavbarFixed(false);
    //     } else {
    //         setIsNavbarFixed(true);
    //     }
    //     };
 
    //     window.addEventListener('scroll', handleScroll);

    //     return () => {
    //     window.removeEventListener('scroll', handleScroll);
    //     };
    // }, []);
    // fixed w-full top-0 z-50 shadow-md

    return (
        // <nav className={`flex bg-indigo-950 justify-between w-screen p-4 ${isNavbarFixed ? 'fixed top-0 left-0 z-50' : ''}`}>
        <nav className="flex h-[10vh] bg-[#1f2235] justify-between fixed w-screen p-4 z-50 shadow-md">

            <div className="font-libre">
                <h1>Bhavya.in</h1>
            </div>
            <div className="flex space-x-7  mt-[1%] mr-[6%] shadow-2xl font-serif text-xl">
                <span className="Nav-item relative"><a href="#home" className="text-white hover:text-red-500" >Home</a></span>
                <span className="Nav-item relative"><a href="#about" className="text-white hover:text-red-500">About</a></span>
                <span className="Nav-item relative"><a href="#skills" className="text-white hover:text-red-500">Skills</a></span>
                <span className="Nav-item relative"><a href="#workexp" className="text-white hover:text-red-500">Portfolio</a></span>
                <span className="Nav-item relative"><a href="#services" className="text-white hover:text-red-500">Services</a></span>
                <span className="Nav-item relative"><a href="#achieve" className="text-white hover:text-red-500">Achievements</a></span>
                <span className="Nav-item relative"><a href="#contact" className="text-white hover:text-red-500">Contact</a></span>
            </div>
        </nav>
    )
}


export default NavBar;