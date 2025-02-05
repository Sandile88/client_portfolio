"use client"

import Image from "next/image";
import { Link as ScrollLink } from "react-scroll";

const About = () => {
  return (
    <section className="bg-white py-24" id="about-me">
      <div className="container px-5 mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold tracking-tight text-gray-900">
            {`About`} <span className="text-yellow-500">{`Me`}</span>
          </h2>
          <div className="w-24 h-1 bg-yellow-500 mx-auto rounded mt-4"></div>
        </div>

        <div className="lg:w-4/5 mx-auto">
          <div className="flex flex-col lg:flex-row items-center lg:items-start gap-12">
            <div className="lg:w-1/3">
              <div className="relative w-64 h-64 rounded-full mx-auto">
                <div className="absolute inset-0 bg-gradient-to-r from-yellow-500/20 to-yellow-600/20 rounded-full blur-xl" />
                <div className="relative w-full h-full rounded-full border-8 border-yellow-500 overflow-hidden">
                  <Image src="/img.jpeg" alt="Professional profile" fill className="object-cover" priority />
                </div>
              </div>
            </div>

            <div className="lg:w-2/3 flex flex-col justify-center">
              <h2 className="font-medium text-gray-900 text-2xl mb-4">{`Professional Profile`}</h2>
              <div className="w-12 h-1 bg-yellow-500 rounded mb-6"></div>
              <p className="text-base text-gray-600 mb-6">
               {` Accomplished accountant with expertise in IFRS, IFRS for SMEs, and ISA standards. CaseWare specialist
                with proven implementation success.`}
              </p>
              <p className="leading-relaxed text-lg mb-6 text-gray-600">
               {` With over 9 years of experience in both private and public sectors, I specialize in financial
                accounting, statutory reporting, and system implementation. My expertise extends to managing complex
                audits, preparing consolidated financial statements, and ensuring compliance with international
                standards. As a CaseWare specialist, I've successfully implemented solutions across various industries
                while exceeding client expectations.`}
              </p>
              <ScrollLink
                to={"experience"}
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                className="text-yellow-500 inline-flex items-center hover:text-yellow-600 transition-colors cursor-pointer"
              >
                {`View Experience`}
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="w-4 h-4 ml-2"
                  viewBox="0 0 24 24"
                >
                  <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
              </ScrollLink>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About;

