const { DataTypes } = require("sequelize");
const sequelize = require("../loaders/sequelize");



const Client = sequelize.define(
  "Clients",
  {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    lastName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    phoneNumber: {
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
module.exports = Client;