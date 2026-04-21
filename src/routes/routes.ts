import { Router } from "express";
import { ActivitieController } from "../controllers/ActivitieController";

const router = Router();

// Atividades
router.get("/activities/:id", ActivitieController.get);
router.get("/activities", ActivitieController.listActivities);
router.post("/activities", ActivitieController.create);
router.delete("/activities/:id", ActivitieController.delete);

export default router;
