import { Router } from "express";
import {
  getRecruitersController,
  createRecruiterController,
  getRecruiterByIdController,
  updateRecruiterController,
  deleteRecruiterController,
} from "../controllers/recruiterController";

const router = Router();

router.get("/", getRecruitersController);
router.post("/", createRecruiterController);
router.get("/:id", getRecruiterByIdController);
router.put("/:id", updateRecruiterController);
router.delete("/:id", deleteRecruiterController);

export default router;