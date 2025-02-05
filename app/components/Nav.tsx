"use client"

import { useState } from "react";
import { Link as ScrollLink } from "react-scroll";
import { Menu } from "lucide-react";

const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const menuItems = ["Home", "About Me", "Services", "Experience", "Contact"]

  return (
    <div className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[90%] max-w-xl">
      <button
        className="md:hidden absolute right-2 top-2 z-50 p-2 rounded-full bg-white/50 backdrop-blur-sm"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        aria-label="Toggle menu"
      >
        <Menu className="h-5 w-5 text-gray-800" />
      </button>

      <div
        className={`
        flex flex-col md:flex-row md:items-center justify-center
        rounded-full bg-white/75 bg-gradient-to-r from-yellow-100/40 via-white/40 to-yellow-100/40 
        border border-white/50 px-3 py-2 text-sm font-medium text-gray-800 
        shadow-lg shadow-gray-800/5 ring-1 ring-gray-800/[.075] backdrop-blur-xl
        ${isMenuOpen ? "rounded-2xl" : "md:rounded-full"}
        transition-all duration-200`}
        >
        <div
          className={`
          flex flex-col md:flex-row items-center gap-1 md:gap-0
          ${isMenuOpen ? "opacity-100 visible" : "md:opacity-100 md:visible opacity-0 invisible"}
          transition-all duration-200`}
          >
          {menuItems.map((item) => (
            <ScrollLink
              key={item}
              to={item.toLowerCase().replace(" ", "-")}
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className="w-full md:w-auto text-center cursor-pointer group relative block transition duration-300 px-3 py-2 hover:text-yellow-600"
              onClick={() => setIsMenuOpen(false)}
              >
              {item}
              <span className="absolute inset-x-1 h-px bg-gradient-to-r from-yellow-500/0 from-10% via-yellow-600 to-yellow-500/0 to-90% transition duration-300 -bottom-0.5 opacity-0 scale-x-0 group-hover:opacity-100 group-hover:scale-x-100" />
              <span className="overflow-hidden absolute inset-0 transition origin-bottom duration-300 opacity-0 scale-0 group-hover:opacity-100 group-hover:scale-100">
                <span className="absolute inset-x-4 -bottom-2 h-full bg-gradient-to-t from-yellow-500/20 to-transparent blur rounded-t-full" />
              </span>
            </ScrollLink>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Nav;

