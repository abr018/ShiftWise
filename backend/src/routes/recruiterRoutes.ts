import { Router } from "express";
import { getRecruitersController } from "../controllers/recruiterController";

const router = Router();

router.get("/", getRecruitersController);

export default router;