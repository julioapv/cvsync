type CVData = {
    personal: {
      name: string
      email: string
      phone: string
      address: string
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

const JobExp = () => {
    return (
        <div className="mb-6">
            <h3 className="text-xl font-semibold mb-2">Job Experience</h3>
            <label htmlFor="company">Company Name</label>
            <input
            type="text"
            name="company"
            // value={initialCVData.jobs.company}
            //   onChange={handlePersonalChange}
            placeholder="Company"
            className="w-full p-2 mb-2 border rounded"
            />
            
            <label htmlFor="position">Position</label>
            <input
            type="text"
            name="position"
            // value={initialCVData.personal.email}
            //   onChange={handlePersonalChange}
            placeholder="Position"
            className="w-full p-2 mb-2 border rounded"
            />

            <div className="flex gap-5">
                <div>
                    <label htmlFor="startDate">Start Date</label>
                    <input
                    type="date"
                    name="startDate"
                    // value={initialCVData.personal.phone}
                    //   onChange={handlePersonalChange}
                    placeholder=""
                    className="w-full p-2 mb-2 border rounded"
                    />
                </div>

                <div>
                    <label htmlFor="endDate">End Date</label>
                    <input
                    type="date"
                    name="endDate"
                    // value={initialCVData.personal.phone}
                    //   onChange={handlePersonalChange}
                    placeholder=""
                    className="w-full p-2 mb-2 border rounded"
                    />
                </div>
            </div>
        </div>
    )
} 

export { JobExp }