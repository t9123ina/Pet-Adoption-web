"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    try {
      await queryInterface.bulkInsert("Animals", [
        {
          name: "Dog",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Cat",
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ]);
      await queryInterface.bulkInsert("Pets", [
        {
          name: "Houston",
          type: 0,
          followers: 0,
          adopted: false,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Carmela",
          type: 1,
          followers: 0,
          adopted: false,
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ]);
    } catch (err) {
      throw err;
    }
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('People', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
  },

  down: async (queryInterface, Sequelize) => {
    try {
      await queryInterface.bulkDelete("Pets", null, {});
      queryInterface.bulkDelete("Animals", null, {});
    } catch (err) {
      throw err;
    }
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
  }
};
