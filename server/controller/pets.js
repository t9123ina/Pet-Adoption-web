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
  var queryObj = Object.entries(req.query);
  var query = {};
  queryObj.forEach(item => {
    if (item[1] == "false") {
      query[item[0]] = false;
    } else if (item[1] == "true") {
      query[item[0]] = true;
    } else {
      query[item[0]] = item[1];
    }
  });
  console.log(query);

  return Pets.findAll({
    where: query,
    include: [{ model: Animals }],
    order: [["createdAt", "DESC"]]
  })
    .then(pets => {
      pets.forEach(row => {
        row.dataValues.Animal = row.dataValues.Animal.name;
      });
      const headers = req.headers;
      if (headers.hasOwnProperty("origin")) {
        return res.json({ pets: pets });
      } else {
        return res.render("success_view", {
          table: "Pets",
          items: pets
        });
      }
    })
    .catch(err => {
      res.status(404).send(err);
    });
};

module.exports.retrieve = (req, res) => {
  var petID = req.params.id;
  var id = parseInt(petID);
  if (isNaN(id)) {
  } else {
    return Pets.findByPk(petID, {})
      .then(pet => {
        const headers = req.headers;
        if (headers.hasOwnProperty("origin")) {
          return res.json({ pet: pet });
        } else {
          return res.render("success_view", {
            table: "Pets",
            items: [pet]
          });
        }
      })
      .catch(err => {
        res.status(404).send(err);
      });
  }
};
