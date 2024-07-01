
const { error } = require("console");
const fs = require("fs");

// fs.appendFile("harry.txt", "Hi, this is the string to write", () =>{

// })

// console.log("hiasfdasd");

fs.readFile("harry.txt", (e, d) =>{
    console.log(error, d.toString());
})

