import Link from "next/link";
import {
    RiHome9Line as Home,
    RiUser3Line as About,
    RiBook2Line as Skills,
    RiMailSendLine as Contact,
    RiGithubLine as Github,
    RiLinkedinBoxLine as Linkedin,
} from "react-icons/ri";
import { GoPackage as Projects } from "react-icons/go";

export default function Navbar() {
    return (
        <nav className="fixed top-0 left-0 w-full bg-black shadow-md z-50">
            <div className="max-w-5xl flex items-center justify-between px-4 py-3 mx-auto">
                <div className="text-xl font-bold">
                    <Link href="/">Komkit</Link>
                </div>
                <div className="right-0 space-x-4 hidden md:flex">
                    <button className="text-white hover:text-gray-300 hover:cursor-pointer">
                        <Home className="inline w-5 h-5 mr-1 mb-0.5" />
                        Home
                    </button>
                    <button className="text-white hover:text-gray-300 hover:cursor-pointer">
                        <About className="inline w-5 h-5 mr-1 mb-0.5" />
                        About
                    </button>
                    <button className="text-white hover:text-gray-300 hover:cursor-pointer">
                        <Skills className="inline w-5 h-5 mr-1 mb-0.5" />
                        Skills
                    </button>
                    <button className="text-white hover:text-gray-300 hover:cursor-pointer">
                        <Projects className="inline w-5 h-5 mr-1 mb-0.5" />
                        Projects
                    </button>
                    <button className="text-white hover:text-gray-300 hover:cursor-pointer">
                        <Contact className="inline w-5 h-5 mr-1 mb-0.5" />
                        Contact
                    </button>
                </div>
                <div className="flex space-x-4">
                    <Github className="inline w-5 h-5 mb-0.5 text-white hover:text-gray-300 hover:cursor-pointer" />
                    <Linkedin className="inline w-5 h-5 mb-0.5 text-white hover:text-gray-300 hover:cursor-pointer" />
                </div>
                {/* TODO: Hamburger for mobile */}
            </div>
        </nav>
    );
}
