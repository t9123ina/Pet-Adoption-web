"use strict";
module.exports = (sequelize, DataTypes) => {
  const Adoption = sequelize.define(
    "Adoption",
    {
      name: DataTypes.STRING,
      email: DataTypes.STRING,
      phone: DataTypes.STRING,
      type: DataTypes.INTEGER,
      reason: DataTypes.STRING,
      experience: DataTypes.BOOLEAN
    },
    {}
  );
  Adoption.associate = function(models) {
    // associations can be defined here
  };
  return Adoption;
};
