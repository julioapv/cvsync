export interface CVData {
  personal: {
    name: string;
    email: string;
    phone: string;
    address: string;
  };
  jobs: {
    title: string;
    company: string;
    startDate: string;
    endDate: string;
    description: string;
  }[];
  education: {
    degree: string;
    institution: string;
    graduationYear: string;
  }[];
}