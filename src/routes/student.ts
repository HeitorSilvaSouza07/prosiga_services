import { Router } from "express";
import { StudentSubmitController } from "../controllers/students/StudentSubmitController";

const router = Router();

// Submission 
router.post('/submit', StudentSubmitController.createSubmit);