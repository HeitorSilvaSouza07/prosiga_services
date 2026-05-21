import { Router } from "express";
import { SessionController } from "../controllers/auth/SessionController";

const router = Router();

router.post("/login", SessionController.loginUser);

export default router;
