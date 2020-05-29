const models = require("../models");

const Contacts = models.Contact;

/*
REST API
list: to get all data in the table
retrieve: to get single data in the table
create: to create new records
update: to update new records
*/
module.exports.list = (req, res) => {
  return Contacts.findAll({ order: [["createdAt", "DESC"]] })
    .then(contacts => {
      const headers = req.headers;
      if (headers.hasOwnProperty("origin")) {
        return res.json({ contacts: contacts });
      } else {
        return res.render("success_view", {
          table: "Contacts",
          items: contacts,
          contacts: contacts
        });
      }
    })
    .catch(err => {
      res.status(404).send(err);
    });
};
