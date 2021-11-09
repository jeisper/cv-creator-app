const mongoose = require("mongoose");
const express = require("express");
const dotenv = require("dotenv");
dotenv.config({ path: "../.env" });

const app = express();
const PORT = 5000;

app.get("/api/templates", (req, res) => {
  res.send({
    status: 200,
    data: [
      {
        name: "pro",
        previewImg: "",
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
