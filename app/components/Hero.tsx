import React from 'react';
import { ArrowDown, Phone, Mail, MapPin, Linkedin } from 'lucide-react';
import Image from 'next/image';


const Hero = () => {
  return (
    <div className="relative min-h-screen bg-white">

      <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 pt-32">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-8">
          
          <div className="flex flex-col justify-center space-y-8">
            <div className="space-y-4">
              <h2 className="text-lg font-semibold text-yellow-500">Chartered Accountant</h2>
              <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
                Ayanda Bhebhe
              </h1>
              <p className="text-xl text-black">
                An accomplished, dynamic and well-seasoned Accountant and Auditor with over 9 years of experience
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-center space-x-3 text-black">
                <MapPin className="h-5 w-5 text-yellow-500" />
                <span>Winchester Hills – Gauteng, South Africa</span>
              </div>
              <div className="flex items-center space-x-3 text-black">
                <Phone className="h-5 w-5 text-yellow-500" />
                <span>+27 76 272 0013</span>
              </div>
              <div className="flex items-center space-x-3 text-black">
                <Mail className="h-5 w-5 text-yellow-500" />
                <span>ayandasizalobuhle@gmail.com</span>
              </div>
              <div className="flex items-center space-x-3 text-black">
                <Linkedin className="h-5 w-5 text-yellow-500" />
                <a href="https://za.linkedin.com/in/ayanda-bhebhe-400b0032" className="hover:text-yellow-500 transition-colors">
                  LinkedIn Profile
                </a>
              </div>
            </div>

            <div className="pt-4">
              <button className="group inline-flex items-center rounded-full bg-yellow-500 px-8 py-3 text-gray-900 transition-colors hover:bg-yellow-400">
                Download CV
                <ArrowDown className="ml-2 h-5 w-5 transition-transform group-hover:translate-y-1" />
              </button>
            </div>
          </div>

          <div className="relative hidden lg:block">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="h-[450px] w-[450px] rounded-full bg-yellow-500/10" />
            </div>
            <div className="relative flex h-full items-center justify-center">
              <div className="h-[400px] w-[400px] rounded-full  border-8 border-yellow-500 shadow-lg overflow-hidden">
              <Image
                src="/img.jpeg"
                alt="Professional headshot"
                width={775}
                height={1170}
                className="object-cover"
                priority
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;