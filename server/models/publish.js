import mongoose from "mongoose";
import { profileData } from "./user.js";

const publishSchema = mongoose.Schema({
  publishID: String,
  template: String,
  data: profileData,
});

const publishModel = mongoose.model("Publish", publishSchema, "published");

export default publishModel;
