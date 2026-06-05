import { Router } from "express";
import { SessionController } from "../controllers/auth/SessionController";
import { CreateController } from "../controllers/auth/CreateController";

const router = Router();

router.post("/login", SessionController.loginUser);
router.post("/create", CreateController.create);

export default router;
