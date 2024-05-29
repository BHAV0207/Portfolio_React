import AA from '../assets/AA.png';
function AboutMe(){
    return(
    <div className="bg-[#23263A]">
        <div className="flex flex-col items-center">
            <h1 className="flex justify-center font-bold mt-[100px]">About Me</h1>
            <p className="flex justify-center text-center mr-[30%] ml-[30%] font-mono">there is nothing greater than perishing while attempting the great and the impossible, that is why I try to be the best every day  </p>
            <div className='h-[0.31rem] w-[12rem] bg-red-600 font-bold mt-9'></div>
            
        </div>
        <div className="flex justify-center">
            <div><img src={AA} className='h-600 w-[500px]'/></div>
            <div className='flex flex-col w-1/2 mt-[100px]'>
                <div><h1 className='text-4xl mb-4 font-bold'>Hi There!</h1></div>
                <div><p className='mb-4 font-mono'>I am a highly skilled and experienced Front-End Developer with 2 years of experience in the industry. I am proficient in a variety of technologies with the latest web development trends and best practices. I am a highly motivated and results-oriented individual with a strong work ethic. I am always eager to learn new things and take on new challenges. I am also a team player and I am always willing to help others.</p></div>
                <div><p className='mb-4 font-mono'>In my previous role, I was responsible for developing and maintaining a large-scale web application. I also worked on a variety of projects, including developing a new user interface, improving the performance of the application, and adding new features. I am confident that I have the skills and experience necessary to be successful in a Front-End engineer role. I am a hard worker and I am always willing to go the extra mile. I am also a team player and I am always willing to help others.</p></div>
                <div><p className='mb-4 font-mono'>I am eager to take on new challenges and I am always looking for ways to improve my skills. I am confident that I can make a significant contribution to your team or build your projects with the latest technologies.
                    </p></div>
            </div>
        </div>
    </div>
    )
}

export default AboutMe;