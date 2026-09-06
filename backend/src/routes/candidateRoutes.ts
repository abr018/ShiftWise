import { Router } from "express";
import {
  getCandidatesController,
  getCandidateByIdController,
  createCandidateController,
  updateCandidateController,
  deleteCandidateController,
} from "../controllers/candidateController";

const router = Router();

router.get("/", getCandidatesController);
router.post("/", createCandidateController);
router.get("/:id", getCandidateByIdController);
router.put("/:id", updateCandidateController);
router.delete("/:id", deleteCandidateController);
export default router;