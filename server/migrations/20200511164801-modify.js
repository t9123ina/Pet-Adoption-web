"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.queryInterface.sequelize.transaction(t => {
      return Promise.all([
        queryInterface.addColumn(
          "Features",
          "description",
          {
            type: Sequelize.STRING
          },
          { transaction: t }
        )
      ]);
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.sequelize.transaction(t => {
      return Promise.all([
        queryInterface.removeColumn("Features", "description", {
          transaction: t
        })
      ]);
    });
  }
};
