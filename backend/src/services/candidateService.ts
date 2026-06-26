import { Candidate } from "../models/Candidate";

export const getCandidatesService = (): Candidate[] => {
    return [
        {
            id: 1,
            name: "Jonh Doe",
            email: "johndoe@example.com",
            role: "Candidate",
            skills: ["JavaScript", "TypeScript", "React"],
            exprerienceYears: 1
        },
        {
            id: 2,
            name: "lara Croft",
            email: "laracroft@example.com",
            role:"Candidate",
            skills: ["Node.js", "MaiaDB", "Express"],
            exprerienceYears: 2

        },
    ];
};