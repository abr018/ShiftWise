import {Request, Response} from "express";
import {getCandidatesService } from "../services/candidateService";

export const getCandidatesController = (
    req: Request,
    res: Response
) => {
    const candidates = getCandidatesService();

    return res.json(candidates);

};