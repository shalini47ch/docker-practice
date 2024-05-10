const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("Welcome to the webapp");
});

//now here write the logic for the app listening on port 3000
app.listen(3000, () => {
  console.log("App running on port 3000");
});
