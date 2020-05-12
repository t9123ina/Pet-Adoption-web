const models = require("../models");

const Animals = models.Animal;

/*
REST API
list: to get all data in the table
retrieve: to get single data in the table
create: to create new records
update: to update new records
*/
module.exports.list = (req, res) => {
  return Animals.findAll({ order: [["createdAt", "DESC"]] })
    .then(animals => {
      console.log(animals);
      return res.render("success_view", {
        table: "Animals",
        items: animals
      });
    })
    .catch(err => {
      res.status(404).send(err);
    });
};
