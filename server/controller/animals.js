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
      const headers = req.headers;
      if (headers.hasOwnProperty("origin")) {
        return res.json({ animals: animals });
      } else {
        return res.render("success_view", {
          table: "Animals",
          items: animals
        });
      }
    })
    .catch(err => {
      res.status(404).send(err);
    });
};

module.exports.retrieve = (req, res) => {
  var AnimalID = req.params.id;
  return Animals.findByPk(AnimalID.toString(), {})
    .then(animal => {
      const headers = req.headers;
      if (headers.hasOwnProperty("origin")) {
        return res.json({ animal: animal });
      } else {
        return res.render("success_view", {
          table: "Animals",
          items: [animal]
        });
      }
    })
    .catch(err => {
      res.status(404).send(err);
    });
};
