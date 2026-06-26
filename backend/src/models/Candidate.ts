import { User } from "./User";

export interface Candidate extends User {
    skills: string[];
    exprerienceYears: number;
}