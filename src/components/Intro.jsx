import BHAVpHOTO from '../assets/BHAVpHOTO.png';
import PP from '../assets/PP.png'
function Intro() {
    return (
        <div className='flex h-[70vh] p-12 w-full justify-between ' style={{
            backgroundImage:`url(${PP})`,
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
        }}>
            
            <div className="flex flex-col justify-center ml-[12%]">
                <div className='mb-3'><h5 className='font-sanif text-blue-800'>WELCOME TO MY CREATIVE JOURNEY</h5></div>
                <div className="flex flex-row mb-3">
                    <h1>Hi , I'm Bhav Jain</h1>
                    <i class="fa-solid fa-skull-crossbones"></i>
                </div>
                <div className='mb-3'><h2 className='font-mono  text-3xl font text-purple-700'>A good Software Engineer</h2></div>
                <div className='flex space-x-7 mb-3'>
                    <button className='font-bold font-mono bg-red-600 text-white rounded-3xl hover:bg-white transition duration-500 ease-in-out transform hover:text-red-600'>Resume</button>
                    <button className=' font-bold font-mono bg-red-600 text-white rounded-3xl hover:bg-white transition duration-500 ease-in-out transform hover:text-red-600'>Info</button>
                </div>
            </div>

            <div>
                 <img src={BHAVpHOTO} alt="Example" className='mr-[150px]'/>
            </div>
        </div>
    )
}     
export default Intro;