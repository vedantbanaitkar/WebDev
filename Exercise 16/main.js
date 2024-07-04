const express = require("express");
const mongoose = require("mongoose");
const app = express();
const port = 3000;
const Employee = require("./models/Employee");
mongoose.connect("mongodb://127.0.0.1:27017/company");

const getRandom = (arr) =>{
  let rno = Math.floor(Math.random() * (arr.length));
  return arr[rno];
}

app.set("view engine", "ejs")

app.get("/", (req, res) => {
  res.render("index", {foo: "FOO"});
});

app.get("/generate", async (req, res) => {

  await Employee.deleteMany({})
  let names = ["alice", "John", "Bob"];
  let lang = ["JS", "Java", "c++"];
  let cities = ["New York", "Warsaw", "Mysore"];
  for (let index = 0; index < 10; index++) {
    let e = await Employee.create({
      name: getRandom(names),
      salary: Math.floor(Math.random(0, 2222222)),
      language: getRandom(lang),
      city: getRandom(cities),
      isManager: Math.random()>0?true:false
    })

    // await e.save();
    
  }
  res.render("index", {foo: "FOO"});
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
