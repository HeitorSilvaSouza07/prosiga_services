import { Router } from "express";
import { AdministratorActivitieController } from "../controllers/administrator/AdministratorActivitieController";
import { AdministratorClassControllers } from "../controllers/administrator/AdministratorClassControllers";
import { AdministratorUserControllers } from "../controllers/administrator/AdministratorUserControllers";
import { AdministratorSubjectController } from "../controllers/administrator/AdmnistratorSubjectController";
import { AdministratorPermissionController } from "../controllers/administrator/AdministratorPermissionController";
import { AdministratorUserPermissionController } from "../controllers/administrator/AdministratorUserPermission";
import { AuthUsers } from "../middlewers/auth";

const router = Router();

router.use(AuthUsers.auth, AuthUsers.authAdmin);

// Atividades
router.get("/activities/:id", AdministratorActivitieController.get);
router.get("/activities", AdministratorActivitieController.listActivities);
router.post("/activities", AdministratorActivitieController.create);
router.delete("/activities/:id", AdministratorActivitieController.delete);

// Classes
router.get("/classes/:id", AdministratorClassControllers.get);
router.get("/classes", AdministratorClassControllers.listClass);

//user
router.get("/users/:id", AdministratorUserControllers.get);
router.get("/users", AdministratorUserControllers.listUsers);
router.post("/users", AdministratorUserControllers.create);

//subjects
router.get("/subject/:id", AdministratorSubjectController.get);
router.post("/subject", AdministratorSubjectController.create);

//permissions
router.get('/permissions', AdministratorPermissionController.list)
router.post('/permissions', AdministratorPermissionController.create)

//user permission 
router.get('/userPermission/:id', AdministratorUserPermissionController.listByUser);
router.get('/userPermission/:id', AdministratorUserPermissionController.get);
router.post('/userpermissions', AdministratorUserPermissionController.create);
router.delete('/userpermissions/:id', AdministratorUserPermissionController.delete);

export default router;
