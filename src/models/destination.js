const { DataTypes } = require("sequelize");
const sequelize = require("../loaders/sequelize");



const Destination = sequelize.define(
  "Destinations",
  {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    image: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    description: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    deletedAt:{
      type: DataTypes.DATE
    }

  },
  {
    paranoid: true
  }
  
);
module.exports = Destination;