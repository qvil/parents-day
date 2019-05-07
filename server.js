const path = require("path");
const express = require("express");
const app = express();
require("dotenv").config();
const httpPort = process.env.PORT || 8080;

app.use("/", express.static(__dirname + "/build"));

app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "./build/index.html"));
});

app.listen(httpPort, () => {
  console.log(`HTTP Server listen at http://localhost:${httpPort}`);
  console.log(__dirname + "/build");
});
