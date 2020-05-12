"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "Features",
      [
        {
          title: "What We do",
          description:
            "This impressive paella is a perfect party dish and a fun\
           meal to cook together with your guests. \
        Add 1 cup of frozen peas along with the mussels, if you like.",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          title: "How We Work",
          description:
            "This impressive paella is a perfect party dish and a fun\
           meal to cook together with your guests. \
        Add 1 cup of frozen peas along with the mussels, if you like.",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          title: "What You Can Do",
          description:
            "This impressive paella is a perfect party dish and a fun\
           meal to cook together with your guests. \
        Add 1 cup of frozen peas along with the mussels, if you like.",
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Features", null, {});
  }
};
