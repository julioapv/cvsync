import { CVData } from "../../types/CVData"

type Education = CVData['education'][0];
interface EducationInformationProps {
  educationInfo: Education;
  updateEducation: (
    field: keyof Education,
    value: string,
  ) => void;
}

const EduInfo = ({ educationInfo, updateEducation }: EducationInformationProps) => {
    
    const handleInputChange = (
        event: React.ChangeEvent<HTMLInputElement>,
        field: keyof Education,
      ) => {
        updateEducation(field, event.target.value);
      };

    return (
        <div className="mb-6">
            <h3 className="text-xl font-semibold mb-2">Education</h3>
            <label htmlFor="school">Institution</label>
            <input
            type="text"
            name="institution"
            value={educationInfo.institution}
            onChange={(e) => handleInputChange(e, "institution")}
            placeholder="Institution"
            className="w-full p-2 mb-2 border rounded"
            />
            
            <label htmlFor="degree">Degree</label>
            <input
            type="text"
            name="degree"
            value={educationInfo.degree}
            onChange={(e) => handleInputChange(e, "degree")}
            placeholder="Degree"
            className="w-full p-2 mb-2 border rounded"
            />

            <label htmlFor="graduationYear">Graduation Year</label>
            <input
            type="text"
            name="graduationYear"
            value={educationInfo.graduationYear}
            onChange={(e) => handleInputChange(e, "graduationYear")}
            placeholder=""
            className="w-full p-2 mb-2 border rounded"
            />
        </div>
    )
} 

export { EduInfo }