"use strict";
module.exports = (sequelize, DataTypes) => {
  const Features = sequelize.define(
    "Features",
    {
      title: DataTypes.STRING,
      description: DataTypes.TEXT
    },
    {}
  );
  Features.associate = function(models) {
    // associations can be defined here
  };
  return Features;
};
