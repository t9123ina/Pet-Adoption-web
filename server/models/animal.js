'use strict';
module.exports = (sequelize, DataTypes) => {
  const Animal = sequelize.define('Animal', {
    name: DataTypes.STRING
  }, {});
  Animal.associate = function(models) {
    // associations can be defined here
  };
  return Animal;
};