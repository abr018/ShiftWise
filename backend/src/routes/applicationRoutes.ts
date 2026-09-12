import { Router } from "express";
import {
  getApplicationsController,
  createApplicationController,
  updateApplicationStatusController,
} from "../controllers/applicationController";

const router = Router();

router.get("/", getApplicationsController);
router.post("/", createApplicationController);
router.put("/:id", updateApplicationStatusController);

export default router;