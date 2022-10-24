const { DataTypes } = require("sequelize");
const sequelize = require("../loaders/sequelize");



const Package = sequelize.define(
  "Packages",
  {
    departureDate: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    duration: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    regimen: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    assistance:{
      type: DataTypes.STRING,
      allowNull: true,
      
    },
    coordination:{
      type: DataTypes.STRING,
      allowNull: true,
    },
    from:{
      type: DataTypes.STRING,
      allowNull: false,
    },
    price:{
      type: DataTypes.FLOAT,
      allowNull: true,
    },
    route:{
      type: DataTypes.STRING,
      allowNull: false,
    },
    deletedAt:{
      type: DataTypes.DATE,
      allowNull: true,
    }

  },
  {
    paranoid: true
  }
  
);
module.exports = Package;