import { Router } from "express";
import { ActivitieController } from "../controllers/administrator/ActivitieController";
import { ClassControllers } from "../controllers/administrator/ClassControllers";
import { UserControllers } from "../controllers/administrator/UserControllers";
import { SubjectController } from "../controllers/administrator/SubjectController";

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

//subjects
router.get("/subject/:id", SubjectController.get);
router.post("/subject", SubjectController.create);

export default router;
