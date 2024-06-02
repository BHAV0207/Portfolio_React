function Services(){
    return(
        <div id="services" className="bg-[#1f2235]">
            <div className="text-center mb-[5rem]">
                <div><h1 className="text-4xl font-bold font-serif mt-[10rem]">Offering To My Clients</h1></div>
                <div className="flex flex-col items-center mt-[1.5rem]">
                    <div><p className="font-mono ml-[35rem] mr-[35rem] mb-[1rem]">I will help you to create a product that will meet your expectations to build a very high-quality web presence through my services</p></div>
                    <div className="bg-red-600 h-[0.2rem] w-[10rem]"></div>
                </div>
            </div>


            <div className="flex place-content-between mr-[13rem] ml-[13rem]">
                <div className="bg-[#272A3F] flex flex-col ml-[5rem] mr-[5rem] p-8">
                    <div><i className="fa-regular fa-file fa-2xl hover:text-red-500 transition-colors duration-400"></i></div>
                    <div><h1 className="text-xl mt-[1rem]">FRONT END WEB APP</h1></div>
                    <div><p className="mt-[0.5rem]">I can make a Fully responsive front end web application with react for server side rendering with Tailwind</p></div>
                </div>
                <div className="bg-[#272A3F] flex flex-col mr-[5rem] p-8">
                    <div><i className="fa-regular fa-file fa-2xl hover:text-red-500 transition-colors duration-400"></i></div>
                    <div><h1 className="text-xl mt-[1rem]">E-COMMERCE WEB APP</h1></div>
                    <div><p className="mt-[0.5rem]">I will build e-commerce web application with React, SpringBoot with Payment GateWay</p></div>
                </div>
                <div className="bg-[#272A3F] flex flex-col mr-[5rem] p-8">
                    <div><i className="fa-regular fa-file fa-2xl hover:text-red-500 transition-colors duration-400"></i></div>
                    <div><h1 className="text-xl mt-[1rem]">FULL STACK WEB APP</h1></div>
                    <div><p className="mt-[0.5rem]">Using MERN Stack I usually make Full Stack Web Application and using oAuth2, passport.js and Firebase store</p></div>
                </div>
            </div>
        </div>
    )
}

export default Services;