import {User} from "./User";

export interface Recruiter extends User {
    companyName: string;
    position: string;
}