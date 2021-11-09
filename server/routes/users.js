import express from "express";
import { getUserData } from "../controllers/userController.js";

const userRouter = express.Router();

// Get user's profile data
userRouter.get("/:id/data", getUserData);

export default userRouter;
