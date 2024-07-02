const express = require("express");
const router = express.Router();

router.use((req, res, next) => {
    console.log(Date.now());
    next();
})

router.get("/", (req, res) => {
    res.send("Blog home page");
})

router.get("/:slug", (req, res) => {
  res.send(`Blog-${req.params.slug}`);
});

module.exports = router;
