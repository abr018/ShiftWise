import { Router } from "express";
import {
  getJobsController,
  createJobController,
  getJobByIdController,
  updateJobController,
  deleteJobController,
} from "../controllers/jobController";

const router = Router();

router.get("/", getJobsController);
router.post("/", createJobController);
router.get("/:id", getJobByIdController);
router.put("/:id", updateJobController);
router.delete("/:id", deleteJobController);

export default router;