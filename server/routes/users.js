import express from "express";
import { getUserData, updateUserData } from "../controllers/userController.js";

const userRouter = express.Router();

// Get user's profile data
userRouter.route("/:id/data").get(getUserData).post(updateUserData);

export default userRouter;
