import type React from "react"
import { Building2, Calendar, CheckCircle2 } from "lucide-react"

interface ExperienceItemProps {
  title: string
  company: string
  period: string
  responsibilities: string[]
}

const ExperienceItem: React.FC<ExperienceItemProps> = ({ title, company, period, responsibilities }) => (
  <div className="bg-white rounded-lg shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl hover:scale-105">
    <div className="bg-gradient-to-r from-yellow-500 to-yellow-600 p-4 text-white">
      <h3 className="text-xl font-bold">{title}</h3>
      <div className="flex items-center mt-2">
        <Building2 className="h-4 w-4 mr-2" />
        <span className="font-medium">{company}</span>
      </div>
      <div className="flex items-center mt-1">
        <Calendar className="h-4 w-4 mr-2" />
        <span>{period}</span>
      </div>
    </div>
    <div className="p-4">
      <h4 className="text-lg font-semibold mb-2 text-gray-800">Key Responsibilities:</h4>
      <ul className="space-y-2">
        {responsibilities.map((resp, index) => (
          <li key={index} className="flex items-start">
            <CheckCircle2 className="h-5 w-5 mr-2 text-yellow-500 flex-shrink-0 mt-0.5" />
            <span className="text-gray-600">{resp}</span>
          </li>
        ))}
      </ul>
    </div>
  </div>
)

const Experience: React.FC = () => {
  const experiences: ExperienceItemProps[] = [
    {
      title: "Senior Financial Accountant",
      company: "SA Corporate Real Estate Limited",
      period: "December 2022 - Current",
      responsibilities: [
        "Prepare consolidated and separate annual financial statements for the group",
        "Prepare interim reporting for bi-annual distribution announcement",
        "Manage property sales schedules for broll managed properties",
        "Handle audit & review queries for Property Companies and Joint Ventures",
        "Ensure compliance with GAAP principles and prepare statutory reporting",
      ],
    },
    {
      title: "Accountant/Audit Senior",
      company: "Growthstone Assurance Inc.",
      period: "January 2022 - November 2022",
      responsibilities: [
        "Draft separate and consolidated annual financial statements",
        "Manage full audit functions with internal/external auditors",
        "Prepare monthly management accounts and financial budgets",
        "Maintain statutory compliance and implement internal control procedures",
        "Contracted to Deloitte SA to assist with the Eskom External Audit",
      ],
    },
    {
      title: "CaseWare Working Papers Senior Consultant",
      company: "Adapt IT (Pty) Ltd",
      period: "September 2018 - December 2021",
      responsibilities: [
        "Manage projects assigned to the consulting department",
        "Consult and provide training for corporate and public entity clients on IFRS, IFRS for SMEs, GRAP, and more",
        "Assist clients in integrating their ERP to CaseWare",
        "Customize templates to fit client requirements (Case View Customisations)",
        "Prepare monthly and quarterly reports for the CaseWare department",
      ],
    },
    {
      title: "SAICA Articles",
      company: "Ngubane & Co Chartered Accountants",
      period: "January 2014 - December 2017",
      responsibilities: [
        "Completed tasks to gain exposure to SAICA Training Program competencies",
        "Planned, executed, and finalized audits",
        "Prepared annual financial statements within required frameworks",
        "Prepared taxation calculations for clients",
        "Outsourced to Auditor-General South Africa (AGSA)",
        "Audited predetermined objectives (Auditor-General Procedures)",
        "Evaluated financial viability of clients by calculating ratios",
      ],
    },
  ]

  return (
    <section className="bg-gray-50 py-24" id="experience">
      <div className="container px-5 mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold tracking-tight text-gray-900">
            My <span className="text-yellow-500">Experience</span>
          </h2>
          <div className="w-24 h-1 bg-yellow-500 mx-auto rounded mt-4"></div>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {experiences.map((exp, index) => (
            <ExperienceItem key={index} {...exp} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Experience

