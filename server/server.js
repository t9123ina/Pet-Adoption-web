const express = require("express");
const bodyParser = require("body-parser");
var fs = require('fs');
var cors = require("cors");
const app = express();

//  use EJS to create template
app.set("view engine", "ejs");
app.use(cors());

var defaultRouter = require("./router/index");

app.use(bodyParser.json());

app.use("/", defaultRouter);
app.use("/static", express.static("upload"));

app.listen(5000, () => {
  console.log("Server is up on port 5000");
});

var urlencodedParser = bodyParser.urlencoded({ extended: false })
app.post('/applyform', urlencodedParser, function (req, res) {
  var str_json = JSON.stringify(req.body);
 
 fs.appendFile('applyform.json', str_json, 'utf8', function(){
  console.log("success!!!");
 });
});