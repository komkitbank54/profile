"use client";

import { useState } from "react";
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
import { HiMenuAlt3 as MenuIcon, HiX as CloseIcon } from "react-icons/hi";

const navItems = [
  { href: "/", label: "Home", Icon: Home },
  { href: "/about", label: "About", Icon: About },
  { href: "/skills", label: "Skills", Icon: Skills },
  { href: "/projects", label: "Projects", Icon: Projects },
  { href: "/contact", label: "Contact", Icon: Contact },
];

const socialLinks = [
  { href: "https://github.com/yourusername", Icon: Github },
  { href: "https://linkedin.com/in/yourusername", Icon: Linkedin },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full bg-gradient-to-r from-black/80 via-gray-900/80 to-black/80 backdrop-blur-md shadow-lg z-50">
      <div className="max-w-6xl flex items-center justify-between px-6 py-4 mx-auto">
        
        {/* Logo */}
        <Link
          href="/"
          className="text-[2.4rem] font-extrabold text-white hover:text-gray-200 transition-colors"
        >
          Komkit
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6 text-[1.6rem]">
          {navItems.map(({ href, label, Icon }) => (
            <Link
              key={label}
              href={href}
              className="group flex items-center text-white transition-all duration-200 hover:text-cyan-300"
            >
              <Icon className="w-7 h-7 mr-1 transition-transform duration-300 group-hover:scale-120"/>
              <span className="relative">
                {label}
                <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-cyan-300 transition-all duration-300 group-hover:w-full" />
              </span>
            </Link>
          ))}
        </div>

        {/* Social Icons */}
        <div className="hidden md:flex space-x-4">
          {socialLinks.map(({ href, Icon }) => (
            <Link
              key={href}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-cyan-300 transition-transform duration-300 hover:scale-120"
            >
              <Icon className="w-7 h-7" />
            </Link>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <CloseIcon className="w-7 h-7" /> : <MenuIcon className="w-7 h-7" />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-black/90 backdrop-blur-md px-6 pb-4 space-y-3">
          {navItems.map(({ href, label, Icon }) => (
            <Link
              key={label}
              href={href}
              className="flex items-center text-white hover:text-cyan-300 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              <Icon className="w-5 h-5 mr-2" />
              {label}
            </Link>
          ))}
          <div className="flex space-x-4 pt-2 border-t border-gray-700">
            {socialLinks.map(({ href, Icon }) => (
              <Link
                key={href}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-cyan-300 transition-transform duration-300 hover:scale-110"
              >
                <Icon className="w-5 h-5" />
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
