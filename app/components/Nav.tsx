"use client"

import React from 'react';
import { Link as ScrollLink } from 'react-scroll';

const Nav = () => {
  return (
    <div className="fixed top-4 left-1/2 -translate-x-1/2 z-50">
      <div className="flex items-center rounded-full bg-white/75 bg-gradient-to-r from-yellow-100/40 via-white/40 to-yellow-100/40 border border-white/50 px-3 text-sm font-medium text-gray-800 shadow-lg shadow-gray-800/5 ring-1 ring-gray-800/[.075] backdrop-blur-xl">
        {['Home', 'About Me', 'Services', 'Experience', 'Contact'].map((item) => (
          <ScrollLink
            key={item}
            to={item.toLowerCase().replace(' ', '-')}
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            className="flex-none group relative block transition duration-300 px-3 py-2.5 hover:text-yellow-600"
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
  );
};

export default Nav;