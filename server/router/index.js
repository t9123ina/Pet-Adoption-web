var express = require("express");

var router = express.Router();

const Features = require("../controller/features.js");
const Pets = require("../controller/pets.js");
const Animals = require("../controller/animals.js");

router.get("/features", Features.list);
router.get("/pets", Pets.list);
router.get("/animals", Animals.list);

module.exports = router;
