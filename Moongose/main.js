
import mongoose from "mongoose";
import express from "express";
import {Todo} from "./models/todo.js"

let conn = await mongoose.connect("mongodb://localhost:27017/todo");

const app = express();
const port = 4000;

app.get("/", (req, res) => {
    const todo = new Todo({desc:"Description here", isDone: false, days: "323425"})
    todo.save();
  res.send("Hello World4!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});