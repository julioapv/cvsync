import { CVData } from "../../types/CVData";

interface PersonalInformationProps {
  personalInfo: {
    name: string;
    email: string;
    phone: string;
    address: string;
  };
  updatePersonal: (
    field: keyof CVData['personal'],
    value: string,
  ) => void;
}
const PersonalInfo = ({ personalInfo, updatePersonal }: PersonalInformationProps) => {

  const handleInputChange = (
    event: React.ChangeEvent<HTMLInputElement>,
    field: keyof typeof personalInfo,
  ) => {
    updatePersonal(field, event.target.value);
  };
  
  return (
        <div className="mb-6">
          <h3 className="text-xl font-semibold mb-2">Personal Information</h3>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            name="name"
            value={personalInfo.name}
            onChange={(e) => handleInputChange(e, "name")}
            placeholder="Full Name"
            className="w-full p-2 mb-2 border rounded"
          />
          
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            value={personalInfo.email}
            onChange={(e) => handleInputChange(e, "email")}
            placeholder="Email"
            className="w-full p-2 mb-2 border rounded"
          />

          <label htmlFor="phone">Phone</label>
          <input
            type="tel"
            name="phone"
            value={personalInfo.phone}
            onChange={(e) => handleInputChange(e, "phone")}
            placeholder="Phone"
            className="w-full p-2 mb-2 border rounded"
          />

          <label htmlFor="phone">Address</label>
          <input
            type="text"
            name="address"
            value={personalInfo.address}
            onChange={(e) => handleInputChange(e, "address")}
            placeholder="Phone"
            className="w-full p-2 mb-2 border rounded"
          />
      </div>
    )
} 

export { PersonalInfo }