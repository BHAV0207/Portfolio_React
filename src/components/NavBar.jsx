// import { useState, useEffect } from "react";

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
    

    return (
        // <nav className={`flex bg-indigo-950 justify-between w-screen p-4 ${isNavbarFixed ? 'fixed top-0 left-0 z-50' : ''}`}>
        <nav className="flex h-[10vh] bg-[#1f2235] justify-between w-screen p-4 shadow-inner shadow-white">

            <div className="font-libre">
                <h1>Bhavya.in</h1>
            </div>
            <div className="flex space-x-7  mt-[1%] mr-[6%] shadow-2xl font-serif text-xl">
                <span><a href="" className="text-white  hover:text-red-600 hover:underline hover:underline-offset-[20px]">Home</a></span>
                <span><a href="" className="text-white  hover:text-red-600 hover:underline hover:underline-offset-[20px]" >About</a></span>
                <span><a href="" className="text-white  hover:text-red-600 hover:underline hover:underline-offset-[20px]">Skills</a></span>
                <span><a href="" className="text-white  hover:text-red-600 hover:underline hover:underline-offset-[20px]">Portfolio</a></span>
                <span><a href="" className="text-white  hover:text-red-600 hover:underline hover:underline-offset-[20px]">Services</a></span>
                <span><a href="" className="text-white  hover:text-red-600 hover:underline hover:underline-offset-[20px]">Achievements</a></span>
                <span><a href="" className="text-white  hover:text-red-600 hover:underline hover:underline-offset-[20px]">Contact</a></span>
                
            </div>
        </nav>
    )
}


export default NavBar;