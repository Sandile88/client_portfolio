import type React from "react";
import { Book, Award } from "lucide-react";

interface EducationItem {
  degree: string
  institution: string
  year: string
}

const educationData: EducationItem[] = [
  {
    degree: "Advanced Diploma in Management Accounting",
    institution: "Chartered Institute of Management Accountants",
    year: "2024",
  },
  {
    degree: "Bachelor of Commerce Honours in Management Accounting",
    institution: "University of KwaZulu-Natal",
    year: "2022",
  },
  {
    degree: "Post Graduate Certificate of Theory in Accounting",
    institution: "University of Johannesburg",
    year: "2013",
  },
  {
    degree: "Bachelor of Commerce Degree in Accounting",
    institution: "University of Johannesburg",
    year: "2012",
  },
  {
    degree: "Matric Certificate",
    institution: "Blue Hills College",
    year: "2009",
  },
]

const Education: React.FC = () => {
  return (
    <section id="education" className="py-16 lg:py-24 bg-white">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
            {`My`} <span className="text-yellow-500">{`Education`}</span>
          </h2>
          <div className="w-24 h-1 bg-yellow-500 mx-auto mt-4 rounded"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {educationData.map((item, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-105"
            >
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-yellow-500/10 rounded-full flex items-center justify-center mr-4">
                  {index === 0 ? (
                    <Award className="w-6 h-6 text-yellow-500" />
                  ) : (
                    <Book className="w-6 h-6 text-yellow-500" />
                  )}
                </div>
                <div className="text-sm font-semibold text-yellow-500">{item.year}</div>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{item.degree}</h3>
              <p className="text-gray-600">{item.institution}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Education;

