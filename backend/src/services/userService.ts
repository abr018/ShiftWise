import { User } from "../models/User";

export const getUsersService = (): User[] => {
    return [
        {
            id: 1,
            name: "Jonh Doe",
            email: "johndoe@example.com",
            role: "Candidate",
        },
        {
            id: 2,
            name: "Lara Croft",
            email: "laracroft@example.com",
            role: "Candidate",
        }
    ];
        
}