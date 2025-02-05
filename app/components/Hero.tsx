"use client"

import { ArrowDown, Phone, Mail, MapPin, Linkedin } from "lucide-react";
import Image from "next/image";

const Hero = () => {
  return (
    <div id="home" className="relative min-h-screen bg-white">
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-20 lg:pt-32">
        <div className="flex flex-col items-center lg:grid lg:grid-cols-2 lg:gap-8">


          <div className="order-1 lg:order-2 w-full flex justify-center mb-8 lg:mb-0">
            <div className="relative">

              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                <div className="w-[280px] h-[280px] lg:w-[450px] lg:h-[450px] rounded-full bg-yellow-500/10" />
              </div>

              <div className="relative">
                <div className="w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] rounded-full border-8 border-yellow-500 overflow-hidden">
                  <Image
                    src="/img.jpeg"
                    alt="Professional headshot"
                    width={400}
                    height={400}
                    className="w-full h-full object-cover"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>


          <div className="order-2 lg:order-1 text-center lg:text-left">
            <div className="space-y-4 mb-8">
              <h2 className="text-xl lg:text-2xl font-semibold text-yellow-500">{`Chartered Accountant`}</h2>
              <h1 className="text-3xl lg:text-5xl font-bold tracking-tight text-gray-900">{`Ayanda Bhebhe`}</h1>
              <p className="text-lg lg:text-xl text-gray-900 max-w-2xl mx-auto lg:mx-0">
                {`A highly accomplished and dynamic accountant and auditor with over nine years of expertise in
                 financial management, compliance, and risk assessment. Known for precision, strategic insight, and 
                 a results-driven approach to optimizing financial performance.`}
              </p>
            </div>


            <div className="space-y-4 mb-8">
              <div className="flex items-center justify-center lg:justify-start space-x-3">
                <MapPin className="h-5 w-5 text-yellow-500 flex-shrink-0" />
                <span className="text-gray-900">{`Winchester Hills – Gauteng, South Africa`}</span>
              </div>
              <a
                href="tel:+27762720013"
                className="flex items-center justify-center lg:justify-start space-x-3 text-gray-900"
              >
                <Phone className="h-5 w-5 text-yellow-500 flex-shrink-0" />
                <span>{`+27 76 272 0013`}</span>
              </a>
              <a
                href="mailto:ayandasizalobuhle@gmail.com"
                className="flex items-center justify-center lg:justify-start space-x-3 text-gray-900"
              >
                <Mail className="h-5 w-5 text-yellow-500 flex-shrink-0" />
                <span>{`ayandasizalobuhle@gmail.com`}</span>
              </a>
              <a
                href="https://www.linkedin.com/in/ayanda-bhebhe-400b0032/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center lg:justify-start space-x-3 text-gray-900 hover:text-yellow-500 transition-colors"
              >
                <Linkedin className="h-5 w-5 text-yellow-500 flex-shrink-0" />
                <span>{`LinkedIn Profile`}</span>
              </a>
            </div>

            <div className="flex justify-center lg:justify-start">
              <a
                href="/AS Bhebhe CV.pdf"
                download
                className="group inline-flex items-center justify-center rounded-full bg-yellow-500 px-6 py-3 text-base font-medium text-gray-900 hover:bg-yellow-400 transition-colors"
              >
                {`Download CV`}
                <ArrowDown className="ml-2 h-5 w-5 transition-transform group-hover:translate-y-1" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero;

