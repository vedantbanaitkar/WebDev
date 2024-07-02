const express = require("express");
const app = express();
const port = 3100;

app.set("view engine", "ejs");

app.get("/", (req, res) => {
  let var1 = "hi this is var1";
  let var2 = "hi this is var2";
  res.render("index", {
    V1: var1,
    V2: var2,
  });
});

// app.get("/blog/:slug", (req, res) => {
//     let var1 = "hi this is var1";
//     let var2 = "hi this is var2";
//     res.sendFile("templates/index.html", {blogTitle: var1, blogContent: var2});
// })

app.listen(port, () => {});
