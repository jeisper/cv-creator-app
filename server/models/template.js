import mongoose from "mongoose";

const templateSchema = mongoose.Schema({
  name: String,
  previewImg: String,
});

const templateModel = mongoose.model("Template", templateSchema, "templates");

export default templateModel;
