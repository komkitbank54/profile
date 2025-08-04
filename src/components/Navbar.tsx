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

const navBtnClass =
    "text-white hover:text-gray-300 hover:cursor-pointer";
const iconClass =
    "inline w-7 h-7 mr-1 mb-0.5";
const socialIconClass =
    "inline w-7 h-7 mb-0.5 text-white hover:text-gray-300 hover:cursor-pointer";

export default function Navbar() {
    return (
        <nav className="fixed top-0 left-0 w-full bg-black shadow-md z-50">
            <div className="max-w-[1440px] flex items-center justify-between px-4 py-3 mx-auto">
                <div className="text-[2rem] font-bold">
                    <Link href="/">Komkit</Link>
                </div>
                <div className="space-x-8 hidden md:flex text-[1.5rem]">
                    <button className={navBtnClass}>
                        <Home className={iconClass} />
                        Home
                    </button>
                    <button className={navBtnClass}>
                        <About className={iconClass} />
                        About
                    </button>
                    <button className={navBtnClass}>
                        <Skills className={iconClass} />
                        Skills
                    </button>
                    <button className={navBtnClass}>
                        <Projects className={iconClass} />
                        Projects
                    </button>
                    <button className={navBtnClass}>
                        <Contact className={iconClass} />
                        Contact
                    </button>
                </div>
                <div className="flex space-x-4">
                    <Github className={socialIconClass} />
                    <Linkedin className={socialIconClass} />
                </div>
                {/* TODO: Hamburger for mobile */}
            </div>
        </nav>
    );
}
