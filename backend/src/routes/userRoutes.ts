import { Router } from "express";
import { getUsersController } from "../controllers/userController";

const router = Router();

router.get("/", getUsersController);

export default router;