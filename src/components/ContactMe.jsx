import Icon from "@mdi/react";
import { mdiHome , mdiPhone , mdiMail , mdiCopyright} from "@mdi/js";
import { mdiFacebook , mdiWhatsapp , mdiGit , mdiGmail , mdiLinkedin} from "@mdi/js";

function ContactMe(){
    return(
        <div  id="contact" className="bg-[rgb(31,34,53)]">
           <div className="text-center mb-[5rem]">
                <div><h1 className="text-4xl font-bold font-serif mt-[10rem]">Contact me</h1></div>
                <div className="flex flex-col items-center mt-[1.5rem]">
                    <div><p className="font-mono ml-[35rem] mr-[35rem] mb-[1rem]">Let's work together</p></div>
                    <div className="bg-red-600 h-[0.2rem] w-[10rem]"></div>
                </div>
            </div>

           <div className="flex justify-center space-x-[150px]">
                <div className=" z-50 w-[400px] shadow-xl  text-center">
                    <div className="mt-[10%]"><Icon className="ml-[40%] rounded-full border-2 p-3" path={mdiMail} size={3} color="red"/></div>
                    <div className="mt-[10%]"><h1 className="font-extrabold text-3xl">EMAIL</h1></div>
                    <div className="mt-[10%] mb-[10%]"><p>bhavyajain4274@gmail.com</p></div>
                </div>
                <div className="z-50  w-[400px] shadow-xl text-center ml-8 ">
                    <div className="mt-[10%]"><Icon  className="ml-[40%] rounded-full border-2 p-3" path={mdiPhone} size={3} color="red"/></div>
                    <div className="mt-[10%]"><h1 className="font-extrabold text-3xl">PHONE</h1></div>
                    <div className="mt-[10%]  mb-[10%]"><p>+91 1212121212</p></div>
                </div>
                <div className=" z-50  w-[400px] shadow-xl text-center items-center">
                    <div className="mt-[10%]"><Icon  className="ml-[40%] rounded-full border-2 p-3" path={mdiHome} size={3} color="red"/></div>
                    <div className="mt-[10%]"><h1 className="font-extrabold text-3xl">LOCATION</h1></div>
                    <div className="mt-[10%]  mb-[10%]"><p>Electronic city , Banglore</p></div>
                </div>
           </div>
           <footer className="flex flex-col items-center mt-[5%]">
                <div className="flex space-x-[50px] mb-[1.5%]">
                    <a href="https://github.com/"  target="_blank"><Icon path={mdiGit} size={1.5} color="yellow"/></a>
                    <a href="https://www.facebook.com/" target="_blank"><Icon path={mdiFacebook} size={1.5} color="darkblue"/></a>
                    <a href="https://www.whatsapp.com/" target="_blank"><Icon path={mdiWhatsapp} size={1.5} color="green"/></a>
                    <a href="https://mail.google.com/" target="_blank"><Icon path={mdiGmail} size={1.5} color="orange"/></a>
                    <a href="https://in.linkedin.com/" target="_blank"><Icon path={mdiLinkedin} size={1.5} color="blue"/></a>
                    
                    
                </div>
                <div className="flex flex-row">
                    <Icon path={mdiCopyright} size={1} color="white"/><h1 className="text-xl">All right are reserved to<h2 className="text-red-600"> Bhavya Jain</h2></h1>
                </div>
           </footer>
        </div>
    )
}
export default ContactMe;