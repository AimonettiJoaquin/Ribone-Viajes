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
      allowNull: true,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    telefono: {
      type: DataTypes.INTEGER,
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