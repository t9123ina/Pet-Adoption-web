const models = require("../models");

const Pets = models.Pet;
const Animals = models.Animal;

/*
REST API
list: to get all data in the table
retrieve: to get single data in the table
create: to create new records
update: to update new records
*/
module.exports.list = (req, res) => {
  return Pets.findAll({
    include: [{ model: Animals }],
    order: [["createdAt", "DESC"]]
  })
    .then(pets => {
      pets.forEach(row => {
        row.dataValues.Animal = row.dataValues.Animal.name;
      });
      return res.render("success_view", {
        table: "Pets",
        items: pets
      });
    })
    .catch(err => {
      res.status(404).send(err);
    });
};
