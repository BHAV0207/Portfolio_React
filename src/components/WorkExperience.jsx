import {Carousel} from "nuka-carousel";
function WorkExperience(){
 

    return(
        <div id="workexp" className="bg-[#1f2235]">
            <div className="text-center mb-[5rem]">
                <div><h1 className="text-4xl font-bold font-serif mt-[10rem]">Working Experience</h1></div>
                <div className="flex flex-col items-center mt-[1.5rem]">
                <div className="bg-red-600 h-[0.2rem] w-[10rem]"></div>
                </div>
            </div>



            <div className="flex place-content-between">
                <div className="flex flex-col w-[48%]">
                    <p className="mt-[4rem] ml-[80%]">JULY 2022 - CURRENT</p>
                    <p className="mt-[27rem] ml-[80%]">SEP 2021 - JUN 2021</p>
                </div>
                <div className="bg-[#575968] h-[60rem] w-[0.5rem] flex flex-col">
                    <div className="bg-red-600 w-[9px] h-[9px] mt-[4.2rem] rounded-md"></div>
                    <div className="bg-red-600 w-[9px] h-[9px] rounded-md mt-[28rem]"></div>
                </div>
                <div className="w-[48%]">
                    <div className="mt-[3rem]">
                        <h4 className="font-serif font-extrabold text-3xl mb-[1rem]">Software Engineer</h4>
                        <ul className="mr-[20rem] list-none">
                            <p className="text-xl">MARCOPOLO AI</p>
                            <li className="mt-[0.2rem]">Optimized a web application to load 2x faster, resulting in a 10% increase in user satisfaction.</li>
                            <li className="mt-[0.2rem]">Implemented 50+ features and functionalities, ensuring compatibility with 99% of browsers and accessibility for all users.</li>
                            <li className="mt-[0.2rem]">Dedicate efforts to optimizing web applications, resulting in a 20% improvement in page load times and an overall 98% user satisfaction rate.</li>
                            <li className="mt-[0.2rem]">Proactively identified and resolved 100+ technical issues, reducing downtime by 50%.</li>
                            <li className="mt-[0.2rem]">Actively participate in code and design reviews, contributing valuable feedback that has led to a 90% increase in project quality and efficiency.</li>
                            <li className="mt-[0.2rem]">Provide mentorship and support to junior front-end developers, resulting in a 30% improvement in their skill development and productivity.</li>
                        </ul>
                    </div>
                    <div className="mt-[4rem]">
                        <h4 className="font-serif font-extrabold text-3xl mb-[1rem]">Front End Engineer</h4>
                        <p className="mr-[20rem]">
                            <p className="text-xl">CHAYA APP LIMITED</p>
                            <li className="mt-[0.2rem]">Implemented, build and deploy 2 web applications from scratch to production..</li>
                            <li className="mt-[0.2rem]">Supervised the production and developed highly available serverless technology, tested customer-facing prototypes before deployment and scaling for thousands of concurrent traffic.</li>
                            <li className="mt-[0.2rem]">Tested customer-facing prototypes before deployment, resulting in a 99% success rate.</li>
                            <li className="mt-[0.2rem]">Increased web page speed by 2x, making websites more user-friendly and accessible.</li>
                            <li className="mt-[0.2rem]">Made websites compatible with 99% of browsers, ensuring a seamless experience for all users.</li>
                            <li className="mt-[0.2rem]">Increased mobile traffic by 20% with mobile-first responsive website approach.</li>
                        </p>
                    </div>
                </div>
            </div>

        </div>
        
        

    )
}

export default WorkExperience;