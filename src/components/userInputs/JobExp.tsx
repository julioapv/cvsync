import { CVData } from "../../types/CVData"

type Job = CVData['jobs'][0];

interface JobsInformationProps {
    workExpInfo: Job;
    updateWorkExp: (
        field: keyof Job,
        value: string
    ) => void;
}

const JobExp = ({ workExpInfo, updateWorkExp } : JobsInformationProps) => {
    
    const handleInputChange = (
        event: React.ChangeEvent<HTMLInputElement>,
        field: keyof Job,
    ) => {
        updateWorkExp(field, event.target.value);  
    };

    return (
        <div className="mb-6">
            <h3 className="text-xl font-semibold mb-2">Job Experience</h3>
            <label htmlFor="company">Company Name</label>
            <input
            type="text"
            name="company"
            value={workExpInfo.company}
            onChange={(e) => handleInputChange(e, "company")}
            placeholder="Company"
            className="w-full p-2 mb-2 border rounded"
            />
            
            <label htmlFor="title">Title</label>
            <input
            type="text"
            name="title"
            value={workExpInfo.title}
            onChange={(e) => handleInputChange(e, "title")}
            placeholder="Title"
            className="w-full p-2 mb-2 border rounded"
            />

            <div className="flex gap-5">
                <div>
                    <label htmlFor="startDate">Start Date</label>
                    <input
                    type="text"
                    name="startDate"
                    value={workExpInfo.startDate}
                    onChange={(e) => handleInputChange(e, "startDate")}
                    placeholder="Start Date"
                    className="w-full p-2 mb-2 border rounded"
                    />
                </div>

                <div>
                    <label htmlFor="endDate">End Date</label>
                    <input
                    type="text"
                    name="endDate"
                    value={workExpInfo.endDate}
                    onChange={(e) => handleInputChange(e, "endDate")}
                    placeholder="End Date"
                    className="w-full p-2 mb-2 border rounded"
                    />
                </div>
            </div>
        </div>
    )
} 

export { JobExp }