import mongoose, { mongo } from "mongoose";

const TodoSchema = new mongoose.Schema({
  title: { type: String, required:true, default: "def" },
  desc: String,
  isDone: Boolean,
  days: Number,
});

export const Todo = mongoose.model("Todo", TodoSchema);
