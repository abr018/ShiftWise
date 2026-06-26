export type UserRole = "Candidate" | "Recruiter";

export interface User {
    id: number;
    name: string;
    email: string;
    role: UserRole;
}