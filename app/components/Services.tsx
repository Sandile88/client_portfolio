"use client"

import type React from "react"
import { Briefcase, BarChart, FileText, Database, Users, Cog, type LucideIcon } from "lucide-react"

interface ServiceCardProps {
  icon: LucideIcon
  title: string
  description: string
}

const ServiceCard: React.FC<ServiceCardProps> = ({ icon: Icon, title, description }) => (
  <div className="bg-white p-5 lg:p-6 rounded-lg shadow-md transition-all duration-300 hover:shadow-xl hover:scale-105">
    <div className="w-14 h-14 lg:w-16 lg:h-16 rounded-full bg-yellow-500/10 flex items-center justify-center mb-4 mx-auto">
      <Icon className="h-7 w-7 lg:h-8 lg:w-8 text-yellow-500" />
    </div>
    <h3 className="text-lg lg:text-xl font-semibold text-gray-900 mb-2 text-center">{title}</h3>
    <p className="text-sm lg:text-base text-gray-600 text-center">{description}</p>
  </div>
)

interface Service {
  icon: LucideIcon
  title: string
  description: string
}

const Services: React.FC = () => {
  const services: Service[] = [
    {
      icon: Briefcase,
      title: "Financial Management",
      description:
        "Expert financial management services including budgeting, forecasting, and strategic financial planning.",
    },
    {
      icon: FileText,
      title: "Statutory Reporting",
      description:
        "Comprehensive statutory reporting services ensuring compliance with IFRS, IFRS for SMEs, and ISA standards.",
    },
    {
      icon: BarChart,
      title: "Financial Analysis",
      description: "In-depth financial analysis and reporting to drive informed business decisions and strategy.",
    },
    {
      icon: Database,
      title: "CaseWare Implementation",
      description:
        "Specialized CaseWare implementation, customization, and training for optimized financial processes.",
    },
    {
      icon: Users,
      title: "Audit Management",
      description: "Efficient management of internal and external audits, ensuring thorough compliance and accuracy.",
    },
    {
      icon: Cog,
      title: "Process Improvement",
      description: "Strategic process improvement and system implementation to enhance financial operations.",
    },
  ]

  return (
    <section className="bg-gray-50 py-16 lg:py-24" id="services">
      <div className="container px-4 lg:px-5 mx-auto max-w-7xl">
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold tracking-tight text-gray-900">
            My <span className="text-yellow-500">Services</span>
          </h2>
          <div className="w-24 h-1 bg-yellow-500 mx-auto rounded mt-4"></div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services

