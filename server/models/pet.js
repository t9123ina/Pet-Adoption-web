"use strict";

module.exports = (sequelize, DataTypes) => {
  const Pet = sequelize.define(
    "Pet",
    {
      name: DataTypes.STRING,
      type: DataTypes.INTEGER,
      age: DataTypes.INTEGER,
      gender: DataTypes.STRING,
      species: DataTypes.STRING,
      followers: DataTypes.INTEGER,
      adopted: DataTypes.BOOLEAN,
      img_path: DataTypes.TEXT
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
