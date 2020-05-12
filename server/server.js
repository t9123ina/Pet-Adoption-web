const express = require("express");
const bodyParser = require("body-parser");

const app = express();

//  use EJS to create template
app.set("view engine", "ejs");

var defaultRouter = require("./router/index");

app.use(bodyParser.json());

app.use("/", defaultRouter);

app.listen(3000, () => {
  console.log("Server is up on port 3000");
});
