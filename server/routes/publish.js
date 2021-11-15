import express from "express";
import {
  getPublishedData,
  updatePublishedData,
} from "../controllers/publishController.js";

const publishRouter = express.Router();

// Get user's profile data
publishRouter
  .route("/:id/data")
  .get(getPublishedData)
  .post(updatePublishedData);

export default publishRouter;
