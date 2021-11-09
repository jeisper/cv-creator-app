import express from "express";
import { getTemplates } from "../controllers/templatesController.js";

const templatesRouter = express.Router();

// Get all cv templates
templatesRouter.get("/", getTemplates);

export default templatesRouter;
