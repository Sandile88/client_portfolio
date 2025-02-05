"use client"
import { ArrowDown, Phone, Mail, MapPin, Linkedin } from "lucide-react"
import Image from "next/image"

const Hero = () => {
  return (
    <div id="home" className="relative min-h-screen bg-white py-12 lg:py-20">
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-2 lg:gap-12 items-center">
          <div className="flex flex-col justify-center space-y-6 lg:space-y-8 order-2 lg:order-1">
            <div className="space-y-3 lg:space-y-4 text-center lg:text-left">
              <h2 className="text-lg lg:text-xl font-semibold text-yellow-500">{`Chartered Accountant`}</h2>
              <h1 className="text-3xl lg:text-4xl font-bold tracking-tight text-gray-900 lg:text-5xl">
                {`Ayanda Bhebhe`}
              </h1>
              <p className="text-lg lg:text-xl text-gray-900">
                {`An accomplished, dynamic and well-seasoned Accountant and Auditor with over 9 years of experience`}
              </p>
            </div>

            <div className="space-y-3 lg:space-y-4">
              <div className="flex items-center space-x-3 text-gray-900 justify-center lg:justify-start">
                <MapPin className="h-5 w-5 text-yellow-500 flex-shrink-0" />
                <span className="text-sm lg:text-base">{`Winchester Hills – Gauteng, South Africa`}</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-900 justify-center lg:justify-start">
                <Phone className="h-5 w-5 text-yellow-500 flex-shrink-0" />
                <span className="text-sm lg:text-base">{`+27 76 272 0013`}</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-900 justify-center lg:justify-start">
                <Mail className="h-5 w-5 text-yellow-500 flex-shrink-0" />
                <span className="text-sm lg:text-base">{`ayandasizalobuhle@gmail.com`}</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-900 justify-center lg:justify-start">
                <Linkedin className="h-5 w-5 text-yellow-500 flex-shrink-0" />
                <a
                  href="https://www.linkedin.com/in/ayanda-bhebhe-400b0032/"
                  className="hover:text-yellow-500 transition-colors text-sm lg:text-base"
                >
                  {`LinkedIn Profile`}
                </a>
              </div>
            </div>

            <div className="pt-4 flex justify-center lg:justify-start">
              <a
                href="/AS Bhebhe CV.pdf"
                download
                className="group inline-flex items-center rounded-full bg-yellow-500 px-6 lg:px-8 py-2 lg:py-3 text-gray-900 transition-colors hover:bg-yellow-400 text-sm lg:text-base"
              >
                {`Download CV`}
                <ArrowDown className="ml-2 h-4 w-4 lg:h-5 lg:w-5 transition-transform group-hover:translate-y-1" />
              </a>
            </div>
          </div>

          <div className="relative order-1 lg:order-2 flex justify-center lg:block">
            <div className="lg:absolute lg:inset-0 flex items-center justify-center">
              <div className="h-[300px] w-[300px] lg:h-[450px] lg:w-[450px] rounded-full bg-yellow-500/10" />
            </div>
            <div className="relative flex h-full items-center justify-center">
              <div className="relative h-[250px] w-[250px] lg:h-[400px] lg:w-[400px]">
                <div className="absolute inset-0 rounded-full border-8 border-yellow-500 shadow-lg" />
                <div className="h-full w-full rounded-full overflow-hidden">
                  <Image
                    src="/img.jpeg"
                    alt="Professional headshot"
                    width={400}
                    height={400}
                    className="h-full w-full object-cover"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero

