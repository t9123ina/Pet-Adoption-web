"use strict";
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("Contacts", [
      {
        firstName: "Wayne",
        lastName: "Wang",
        email: "wayne.wang@bristol.com",
        phone: "0757808080",
        position: "UI Design",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        firstName: "Tina",
        lastName: "Jian",
        email: "tina.jiang@bristol.com",
        phone: "0757394080",
        position: "Backend Design",
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ]);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Contacts", null, {});
  }
};
