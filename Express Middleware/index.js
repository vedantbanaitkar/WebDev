const express = require("express");
const app = express();
const port = 3000;
const blog = require("./routes/blog")

app.use(express.static("public"));
app.use("/blog", blog)

app.use((req, res, next) => {
    console.log("LOGGED");
    // res.send("MiddleWare1")
    next()
})

app.use((req, res, next) => {
    console.log("LOGGED");
    res.send("MiddleWare2")
    next()
})

app.get("/", (req, res) => {
    res.send("Hello World!");
})

app.listen(port, () => {
    console.log(`listening on port ${port}`);
})