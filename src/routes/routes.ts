import { Router } from "express";
import { ActivitieController } from "../controllers/ActivitieController";
import { ClassControllers } from "../controllers/ClassControllers";

const router = Router();

// Atividades
router.get("/activities/:id", ActivitieController.get);
router.get("/activities", ActivitieController.listActivities);
router.post("/activities", ActivitieController.create);
router.delete("/activities/:id", ActivitieController.delete);

// Classes
router.get("/classes/:id", ClassControllers.get);
router.get("/classes", ClassControllers.listClass);

export default router;
