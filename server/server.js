const express = require("express");
const bodyParser = require("body-parser");
var cors = require("cors");
const app = express();

//  use EJS to create template
app.set("view engine", "ejs");
app.use(cors());

var defaultRouter = require("./router/index");

app.use(bodyParser.json());

app.use("/", defaultRouter);

app.listen(5000, () => {
  console.log("Server is up on port 5000");
});
