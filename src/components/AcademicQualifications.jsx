function AcademicQualifications(){
    return(
        <div className="bg-[#1f2235]">
        <div className="text-center mb-[5rem]">
            <div><h1 className="text-4xl font-bold font-serif mt-[10rem]">Academic Qualifications</h1></div>
            <div className="flex flex-col items-center mt-[1.5rem]">
            <div className="bg-red-600 h-[0.2rem] w-[12rem]"></div>
            </div>
        </div>



        <div className="flex place-content-between">
            <div className="flex flex-col w-[48%]">
                <p className="mt-[4rem] ml-[80%]">JULY 2023 - PRESENT</p>
                <p className="mt-[9.4rem] ml-[80%]">APR 2020 - JUL 2022 </p>
                <p className="mt-[9rem] ml-[80%]">APR 2007 - APR 2020</p>
            </div>
            <div className="bg-[#575968] h-[37rem] w-[0.5rem] flex flex-col">
                    <div className="bg-red-600 w-[9px] h-[9px] mt-[4.2rem] rounded-md"></div>
                    <div className="bg-red-600 w-[9px] h-[9px] rounded-md mt-[10.5rem]"></div>
                    <div className="bg-red-600 w-[9px] h-[9px] mt-[10rem] rounded-md"></div>
                </div>
            <div className="w-[48%]">
                <div className="mt-[3rem]">
                    <h4 className="font-serif font-bold text-3xl mb-[1rem]">B.Sc in Computer Science</h4>
                    <p className="mr-[20rem]">
                        <p className="text-xl">Scaler School Of Technology</p>
                        <p className="text-xl">Online BSc Degree from Bits Pillani</p>
                    </p>
                </div>
                <div className="mt-[4rem]">
                    <h4 className="font-serif font-bold text-3xl mb-[1rem]">Higher Secondary Certificate</h4>
                    <p className="mr-[20rem]">
                        <p className="text-xl">Jayshree Periwal Group of Schools, Jaipur</p>
                        <li className="mt-[0.2rem]">CGPA : 9.7 out of 10 (Science)</li>
                    </p>
                </div>
                <div className="mt-[4rem]">
                    <h4 className="font-serif font-bold text-3xl mb-[1rem]">Middle School Certificate</h4>
                    <p className="mr-[20rem]">
                        <p className="text-xl">Jayshree Periwal Group of Schools, Jaipur</p>
                        <li className="mt-[0.2rem]">CGPA : 9.7 out of 10</li>
                    </p>
                </div>
            </div>
        </div>

    </div>
    )
}

export default AcademicQualifications;