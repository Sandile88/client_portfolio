"use client"

import { Linkedin, Mail, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-50 border-t">
      <div className="container mx-auto px-5 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-gray-600 text-sm">{`©`} {new Date().getFullYear()} {`Ayanda Bhebhe. All rights reserved.`}</p>
          </div>
          <div className="flex space-x-6">
            <a
              href="mailto:ayandasizalobuhle@gmail.com"
              className="text-gray-600 hover:text-yellow-500 transition-colors"
              aria-label="Email"
            >
              <Mail className="h-5 w-5 text-yellow-500" />
            </a>
            <a
              href="tel:+27762720013"
              className="text-gray-600 hover:text-yellow-500 transition-colors"
              aria-label="Phone"
            >
              <Phone className="h-5 w-5 text-yellow-500" />
            </a>
            <a
              href="https://www.linkedin.com/in/ayanda-bhebhe-400b0032/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-yellow-500 transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-5 w-5 text-yellow-500" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer;

