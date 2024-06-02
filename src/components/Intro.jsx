import BHAVpHOTO from '../assets/BHAVpHOTO.png';
import PP from '../assets/PP.png'
import Typing from './Typing'
import Icon from '@mdi/react';
import { mdiHandWave } from '@mdi/js';

function Intro() {
    return (
        <div id='home' className='flex h-[70vh] mt-[50px] p-12 w-full justify-between ' style={{
            backgroundImage:`url(${PP})`,
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
        }}>
            
            <div className="flex flex-col justify-center ml-[12%]">
                <div className='mb-3'><h5 className='font-sanif text-blue-800'>WELCOME TO MY CREATIVE JOURNEY</h5></div>
                <div className="flex flex-row mb-3">
                    <h1>Hi , I'm Bhav Jain</h1>
                    <div className="animate-wave mx-4">
                        <Icon path={mdiHandWave} size={2} color="yellow" />
                    </div>
                </div>
                <div className='mb-3'>
                    <Typing text={["I am a CS Undergrad", "I am a Software Developer", "I have good skills in JAVA, React and Python"]}/>
                </div>
                <div className='flex space-x-7 mb-3'>
                    <button className='font-bold font-mono bg-red-600 text-white rounded-3xl hover:bg-white transition duration-500 ease-in-out transform hover:text-red-600'><a className='text-white font-bold hover:text-red-600' href="#skills">Resume</a></button>
                    <button className=' font-bold font-mono bg-red-600 text-white rounded-3xl hover:bg-white transition duration-500 ease-in-out transform hover:text-red-600'><a className='text-white font-bold hover:text-red-600' href="#workexp">Info</a></button>
                </div>
            </div>

            <div>
                 <img src={BHAVpHOTO} alt="Example" className='mr-[150px]'/>
            </div>
        </div>
    )
}     
export default Intro;