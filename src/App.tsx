import type React from "react"

import { PersonalInfo } from "./modules/PersonalInfo"
import { EduInfo } from "./modules/EduInfo"
import { JobExp } from "./modules/JobExp"
import { ButtonAct } from "./modules/ButtonAct"
// Types for our CV data
type CVData = {
  personal: {
    name: string
    email: string
    phone: string
  }
  jobs: {
    title: string
    company: string
    startDate: string
    endDate: string
    description: string
  }[]
  education: {
    degree: string
    institution: string
    graduationYear: string
  }[]
}

// Mock data for initial state
const initialCVData: CVData = {
  personal: {
    name: "John Doe",
    email: "john.doe@example.com",
    phone: "+1 234 567 890",
  },
  jobs: [
    {
      title: "Software Engineer",
      company: "Tech Corp",
      startDate: "2020-01",
      endDate: "Present",
      description: "Developed and maintained web applications using React and Node.js",
    },
  ],
  education: [
    {
      degree: "Bachelor of Science in Computer Science",
      institution: "University of Technology",
      graduationYear: "2019",
    },
  ],
}

const CVGenerator: React.FC = () => {
  return (
    <div className="flex flex-col lg:flex-row min-h-screen bg-gray-100">
      {/* Left side - Editing Section */}
      <div className="w-full lg:w-1/2 p-6 bg-white shadow-md overflow-y-auto">
        <h2 className="text-2xl font-bold mb-4">Edit CV</h2>
        <PersonalInfo />
        <EduInfo/>
        <JobExp />
        <ButtonAct />
      </div>

      {/* Right side - Preview Section */}
      <div className="w-full lg:w-1/2 p-6 bg-gray-200 overflow-y-auto">
        <h2 className="text-2xl font-bold mb-4">CV Preview</h2>
        <div className="bg-white h-4/5 p-6 rounded shadow-md">
          <h3 className="text-2xl font-bold mb-2">{initialCVData.personal.name}</h3>
          <p className="mb-1">{initialCVData.personal.email}</p>
          <p className="mb-4">{initialCVData.personal.phone}</p>

          <h4 className="text-xl font-semibold mb-2">Work Experience</h4>
          {initialCVData.jobs.map((job, index) => (
            <div key={index} className="mb-4">
              <h5 className="font-semibold">{job.title}</h5>
              <p>{job.company}</p>
              <p>
                {job.startDate} - {job.endDate}
              </p>
              <p>{job.description}</p>
            </div>
          ))}

          <h4 className="text-xl font-semibold mb-2">Education</h4>
          {initialCVData.education.map((edu, index) => (
            <div key={index} className="mb-4">
              <h5 className="font-semibold">{edu.degree}</h5>
              <p>{edu.institution}</p>
              <p>Graduated: {edu.graduationYear}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default CVGenerator