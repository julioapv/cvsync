import type React from "react"
import { useState } from "react"

import { CVData } from "./types/CVData"
import { PersonalInfo } from "./components/userInputs/PersonalInfo"
import { EduInfo } from "./components/userInputs/EduInfo"
import { JobExp } from "./components/userInputs/JobExp"
import { ButtonAct } from "./components/userInputs/ButtonAct"

const initialCVData: CVData = {
  personal: {
    name: "John Doe",
    email: "john.doe@example.com",
    phone: "+1 234 567 890",
    address: "Cologne, Germany"
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

  const [cvData, setCvData] = useState<CVData>(initialCVData);

  const updatePersonal = (
    field: keyof CVData['personal'],
    value: string,
  ) => {
    setCvData((prevData) => ({
      ...prevData,
      personal: {
        ...prevData.personal,
        [field]: value,
      },
    }));
  };

  const updateEducation = (
    field: keyof CVData['education'][0],
    value: string,
  ) => {
    setCvData((prevData) => ({
      ...prevData,
      education: prevData.education.map((edu, index) => 
        index === 0 ? { ...edu, [field]: value } : edu
      )
    }));
  };

  const updateWorkExp = (
    field: keyof CVData['jobs'][0],
    value: string,
  ) => {
    setCvData((prevData) => ({
      ...prevData,
      jobs: prevData.jobs.map((jobs, index) => 
        index === 0 ? { ...jobs, [field]: value } : jobs
      )
    }))
  }

  return (

    <div className="flex flex-col lg:flex-row min-h-screen bg-gray-100">
      
      {/* Left side - Editing Section */}
      <div className="w-full lg:w-1/2 p-6 bg-white shadow-md overflow-y-auto">
        <h2 className="text-2xl font-bold mb-4">Edit CV</h2>
        <PersonalInfo 
          personalInfo={cvData.personal}
          updatePersonal={updatePersonal}
        />
        <EduInfo
          educationInfo={cvData.education[0]}
          updateEducation={updateEducation}
        />
        <JobExp 
          workExpInfo={cvData.jobs[0]}
          updateWorkExp={updateWorkExp}
        />


        <ButtonAct onSubmit={() => console.log("ping")
        }/>
      </div>

      {/* Right side - Preview Section */}
      <div className="w-full lg:w-1/2 p-6 bg-gray-200 overflow-y-auto">
        <h2 className="text-2xl font-bold mb-4">CV Preview</h2>
        <div className="bg-white h-4/5 p-6 rounded shadow-md">
          <h3 className="text-2xl font-bold mb-2">{cvData.personal.name}</h3>
          <p className="mb-1">{cvData.personal.address}</p>
          <p className="mb-1">{cvData.personal.email}</p>
          <p className="mb-4">{cvData.personal.phone}</p>

          <h4 className="text-xl font-semibold mb-2">Education</h4>
          {cvData.education.map((edu, index) => (
            <div key={index} className="mb-4">
              <h5 className="font-semibold">{edu.degree}</h5>
              <p>{edu.institution}</p>
              <p>Graduated: {edu.graduationYear}</p>
            </div>
          ))}

          <h4 className="text-xl font-semibold mb-2">Work Experience</h4>
          {cvData.jobs.map((job, index) => (
            <div key={index} className="mb-4">
              <h5 className="font-semibold">{job.title}</h5>
              <p>{job.company}</p>
              <p>
                {job.startDate} - {job.endDate}
              </p>
              <p>{job.description}</p>
            </div>
          ))}

        </div>
      </div>
    </div>
  )
}

export default CVGenerator