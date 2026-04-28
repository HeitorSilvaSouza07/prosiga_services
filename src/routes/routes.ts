import { Router } from "express";
import { ActivitieController } from "../controllers/ActivitieController";
import { ClassControllers } from "../controllers/ClassControllers";
import { UserControllers } from "../controllers/UserControllers";

const router = Router();

// Atividades
router.get("/activities/:id", ActivitieController.get);
router.get("/activities", ActivitieController.listActivities);
router.post("/activities", ActivitieController.create);
router.delete("/activities/:id", ActivitieController.delete);

// Classes
router.get("/classes/:id", ClassControllers.get);
router.get("/classes", ClassControllers.listClass);

//user
router.get("/users/:id", UserControllers.get);
router.get("/users", UserControllers.listUsers);
router.post("/users", UserControllers.createUser);

export default router;
