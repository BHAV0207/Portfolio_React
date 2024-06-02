import Icon from "@mdi/react";
import { Carousel } from "nuka-carousel";
import { mdiWeb } from '@mdi/js';
import { mdiGithub } from '@mdi/js';
function ProjectsBuilt(){

    const imageUrl =[
        'https://t3.ftcdn.net/jpg/03/25/82/36/360_F_325823688_4iSNVuZrxtFklWjKc47m5iAxQi92i3tc.jpg',
        'https://images.unsplash.com/photo-1542010589005-d1eacc3918f2?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y29va2luZyUyMGJvb2t8ZW58MHx8MHx8fDA%3D',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmbOwIO3cQFsg7Ereqcu9vfcfJkQyJPIWh7A&s',
    ]

    return(
        <div id="workexp" className="bg-[#1f2235] flex flex-col justify-center">
            <div className="text-center mb-[5rem]">
                <div><h1 className="text-4xl font-bold font-serif mt-[10rem]">Projects I have Built</h1></div>
                <div className="flex flex-col items-center mt-[1.5rem]">
                <div className="bg-red-600 h-[0.2rem] w-[10rem]"></div>
                </div>
            </div>

            <div className=" flex justify-center w-[50%]">
                <div className="bg-[#272A3F] flex flex-col items-center w-[25rem] h-[35rem]">
                    <div><Carousel
                            autoplay
                            autoPlayInterval={200}
                            autoplayReverse
                            className="" >
                            {
                                imageUrl.map((bannerScr) => {
                                    return <img className="w-[400px] h-[300px]" key={bannerScr} src={bannerScr} />
                                })
                            }
                        </Carousel>
                    </div>
                    <div><h1 className="font-libre mb-[5%]">CookBook</h1></div>
                    <div className="h-[17%]"><p className="font-mono mb-[3%] text-gray-400">it is a online Cooking guide in which is very easy to navigate and use</p></div>
                    <div className="flex mb-[4%] space-x-4">
                        <div className=" text-xl font-serif rounded p-2 border-2 border-red-600 hover:bg-white transition duration-500 ease-in-out transform hover:text-red-600"><a href="https://html.com/"  target="_blank" className=" text-white hover:text-red-600">Html</a></div>
                        <div className=" text-xl font-serif rounded p-2 border-2 border-red-600 hover:bg-white transition duration-500 ease-in-out transform hover:text-red-600"><a href="https://www.w3schools.com/css/"   target="_blank" className=" text-white hover:text-red-600">Css</a></div>
                        <div className=" text-xl font-serif rounded p-2 border-2 border-red-600 hover:bg-white transition duration-500 ease-in-out transform hover:text-red-600"><a href="https://www.w3schools.com/js/" className=" text-white hover:text-red-600">JavaScript</a></div>
                    </div>
                    <div className="flex space-x-8">
                      <a href="https://github.com/BHAV0207/CookBook.git" target="_blank"><Icon  className="hover:text-red-500 transition-colors duration-400" path={mdiWeb} size={1.5} color="grey" /></a>      
                      <a href="https://github.com/BHAV0207" target="_blank"><Icon  className="hover:text-red-600" path={mdiGithub} size={1.5} color="grey" /></a> 
                         
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProjectsBuilt;