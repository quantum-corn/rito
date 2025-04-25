const express = require("express");
const app = express();

// TODO Add the main stuff here!
app.get("/", (req, res) => res.send("Hello, world!"));


const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Rito - Listening on port ${PORT}!`);
});