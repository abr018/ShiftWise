import { Recruiter } from "../models/Recruiter";

export const getRecruitersService = (): Recruiter[] => {
    return [
        {
            id: 1,
            name: "Microsoft Recruiter",
            email: "microsoft@example.com",
            role: "Recruiter",
            companyName: "Microsoft",
            position: "Senior Recruiter"
        },
        {
            id: 2,
            name: "Google Recruiter",
            email: "google@example.com",
            role: "Recruiter",
            companyName: "Google",
            position: "Tech Recruiter"
        }
    ];
};