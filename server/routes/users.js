import express from "express";
import {
  deleteUserData,
  getUserData,
  updateUserData,
} from "../controllers/userController.js";

const userRouter = express.Router();

// Get user's profile data
userRouter.route("/:id/data").get(getUserData).post(updateUserData);
userRouter.post("/:id/delete", deleteUserData);

export default userRouter;
