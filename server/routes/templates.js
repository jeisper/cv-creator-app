import express from "express";
import { getTemplates } from "../controllers/templatesController.js";

const router = express.Router();

// Get all cv templates
router.get("/", getTemplates);

export default router;
