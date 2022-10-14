const { DataTypes } = require("sequelize");
const sequelize = require("../loaders/sequelize");



const Transport = sequelize.define(
  "Transports",
  {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    deletedAt:{
      type: DataTypes.DATE
    }

  },
  {
    paranoid: true
  }
  
);
module.exports = Transport;