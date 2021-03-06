// const mongoose = require("mongoose");
// const express = require("express");
// const dotenv = require("dotenv");
// const cors = require("cors");
// const templates = require("./routes/templates");
import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import templatesRouter from "./routes/templates.js";
import userRouter from "./routes/users.js";
import publishRouter from "./routes/publish.js";

const app = express();

dotenv.config({ path: "../.env" });
const PORT = 5000;

// MIDDLEWARE
app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// ROUTES
app.use("/api/v1/templates", templatesRouter);
app.use("/api/v1/user", userRouter);
app.use("/api/v1/publish", publishRouter);

app.get("/", (req, res) => {
  res.send({
    status: 200,
    data: [
      {
        msg: "hello world",
      },
    ],
  });
});

// console.log("test", process.env.REACT_APP_DB_CONNECTION_URL);

mongoose
  .connect(process.env.REACT_APP_DB_CONNECTION_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("DB connected");
  });

app.listen(PORT, () => {
  console.log("Server running on port " + PORT);
});
