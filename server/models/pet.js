"use strict";

module.exports = (sequelize, DataTypes) => {
  const Pet = sequelize.define(
    "Pet",
    {
      name: DataTypes.STRING,
      type: DataTypes.INTEGER,
      followers: DataTypes.INTEGER,
      adopted: DataTypes.BOOLEAN
    },
    {}
  );
  Pet.associate = function(models) {
    // associations can be defined here
    Pet.belongsTo(models.Animal, {
      foreignKey: {
        name: "type",
        allowNull: false
      }
    });
  };
  return Pet;
};
