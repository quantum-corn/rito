//Set-up router
const { Router } = require("express");
const indexRouter = Router();

//Main stuff here
indexRouter.get("/", (req, res) => res.send("Hello, world!"));

//Export router
module.exports = indexRouter;