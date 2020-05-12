var express = require("express");

var router = express.Router();

const Features = require("../controller/features.js");

router.get("/features", Features.list);

module.exports = router;
