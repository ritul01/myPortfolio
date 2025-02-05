import logo from "../assets/logo.png"
import {FaLinkedin} from "react-icons/fa"
import {FaGithub} from "react-icons/fa"
import {FaSquareXTwitter} from "react-icons/fa6"
import { FaEnvelope } from "react-icons/fa";
const Navbar=()=>{
    return <nav className="mb-20 flex items-center justify-between py-6">
        <div className="flex flex-shrink-0 items-center">
            <img className="mx-2 w-10 rounded bg-neutral-900" src={logo} alt="logo" />
        </div>
        <div className="m-8 flex items-center justify-center gap-4 text-2xl">
            <FaLinkedin onClick={()=>window.open("https://www.linkedin.com/in/ritul-singh-7738a2227")}
                className="cursor-pointer hover:text-blue-500 transition duration-300 ease-in-out"/>
            <FaGithub onClick={()=>window.open("https://github.com/ritul01")}
                className="cursor-pointer hover:text-blue-500 transition duration-300 ease-in-out"/>
            <FaSquareXTwitter onClick={()=>window.open("https://x.com/ritul_1?s=08")}
                className="cursor-pointer hover:text-blue-500 transition duration-300 ease-in-out"/>
            {/* <FaInstagram onClick={()=>window.open("https://www.linkedin.com/in/ritul-singh-7738a2227")}/> */}
            {/* <MdEmail onClick={()=>window.open("ritulssoff000@gmail.com")}/> */}
            <div className=" justify-center items-center">
          <a
            href="mailto:ritulsingh123700@gmail.com" // Replace with your email address
            className="text-black-500 hover:text-blue-500 text-3xl transition-transform transform hover:scale-110"
            title="Send me an email"
          >
            <FaEnvelope />
          </a>
        </div>
        </div>
    </nav>
}

export default Navbar