
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

const PersonalInfo = () => {
    return (
        <div className="mb-6">
        <h3 className="text-xl font-semibold mb-2">Personal Information</h3>
        <input
          type="text"
          name="name"
          value={initialCVData.personal.name}
        //   onChange={handlePersonalChange}
          placeholder="Full Name"
          className="w-full p-2 mb-2 border rounded"
        />
        <input
          type="email"
          name="email"
          value={initialCVData.personal.email}
        //   onChange={handlePersonalChange}
          placeholder="Email"
          className="w-full p-2 mb-2 border rounded"
        />
        <input
          type="tel"
          name="phone"
          value={initialCVData.personal.phone}
        //   onChange={handlePersonalChange}
          placeholder="Phone"
          className="w-full p-2 mb-2 border rounded"
        />
      </div>
    )
} 

export { PersonalInfo }