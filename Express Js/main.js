const express = require("express");
const app = express();
const port = 3000;

app.use(express.static("public"));

app.get("/index/:slug", (req, res) => {
    console.log(req.params);
    console.log(req.query);
  res.send(`Hello ${req.params.slug}!`);
});

app.get("/home", (req, res) => {
  res.send("Home Page!");
});

app.get("/about", (req, res) => {
  res.send("About Us Page!");
});

app.get("/contact", (req, res) => {
  res.send("Contact Us");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
