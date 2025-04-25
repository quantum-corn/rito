//Initialize Express
const express = require("express");
const app = express();

//Import routers
const indexRouter = require("../routes/indexRouter");
const authorRouter = require("../routes/authorRouter");
const blogRouter = require("../routes/blogRouter");

//Connect routers
app.use("/", indexRouter);
app.use("/authors", authorRouter);
app.use("/blogs", blogRouter);

//Activate the server
const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`Rito - Listening on port ${PORT}!`);
});