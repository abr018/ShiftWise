import { Request, Response } from "express";
import { getUsersService } from "../services/userService";

export const getUsersController = (req: Request, res: Response) => {
    const users = getUsersService();

    return res.json(users);
};