const { DataTypes } = require("sequelize");
const sequelize = require("../loaders/sequelize");



const Destination = sequelize.define(
  "Destinations",
  {
    name: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    image: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false,
    },

  },
  {
    // Other model options go here
  }
);
module.exports = Destination;