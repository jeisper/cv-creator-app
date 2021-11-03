const express = require("express");
const app = express();

const PORT = 5555;

app.get("/", (req, res) => {
  res.send({ message: "Hello World!" });
});

app.listen(PORT, () => {
  console.log("Server running on port " + PORT);
});
