import { Carousel } from "nuka-carousel";
function Achievements(){

    const img =['https://img.freepik.com/free-vector/abstract-coming-soon-halftone-style-background-design_1017-27282.jpg',
                    'https://media.istockphoto.com/id/1442799465/video/loading-progress-bar-animation-on-white-background-4k-video-pixel-preloader-downloading.jpg?s=640x640&k=20&c=G6Qg1lMUEXIIojiLjbZm9Fm55r8T7fNx5QcvLj3taIg=',

    ]
    return(
        <div  id="achieve" className="bg-[rgb(31,34,53)]">
            <div className="text-center mb-[5rem]">
                <div><h1 className="text-4xl font-bold font-serif mt-[10rem]">Achievements</h1></div>
                <div className="flex flex-col items-center mt-[1.5rem]">
                    <div className="bg-red-600 h-[0.2rem] w-[10rem]"></div>
                </div>
            </div>

            <div className=" flex justify-center w-[50%]">
                <div className="bg-[rgb(31,34,53)] flex flex-col items-center w-[25rem] h-[35rem]">
                    <div><Carousel
                            autoplay
                            autoPlayInterval={200}
                            autoplayReverse
                            className="" >
                            {
                                img.map((bannerScr) => {
                                    return <img className="w-[400px] h-[300px]" key={bannerScr} src={bannerScr} />
                                })
                            }
                        </Carousel>
                    </div>
                    <div className="h-[17%] text-center"><p className="font-mono mb-[3%] text-white mt-8">As of Now There are not much achievements...thus this page will be updated soon......</p></div>
                </div>
            </div>
        </div>
    )
}
export default Achievements;