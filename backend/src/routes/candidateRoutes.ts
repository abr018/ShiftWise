import { Router } from "express";
import { getCandidatesController } from "../controllers/candidateController";

const router = Router();

router.get("/", getCandidatesController);

export default router;