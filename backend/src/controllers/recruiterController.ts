import { Request, Response } from "express";
import { getRecruitersService } from "../services/recruiterService";

export const getRecruitersController = (
    req: Request,
    res: Response
) => {
    const recruiters = getRecruitersService();

    return res.json(recruiters);
};