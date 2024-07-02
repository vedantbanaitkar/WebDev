const express = require("express");
const app = express();
const port = 3000;

app.use(express.static("public"));

app.get("/", (req, res) => {
  res.send("Hello World1!");
}).post("/", (req, res) => {
  res.send("Hello World2!");
});

app.get("/index", (req, res) => {
  res.sendFile("templates/index.html", {root: __dirname});
});

app.get("/api", (req, res) => {
  res.json({a:1, b:2, c:3});
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
