const { DataTypes } = require("sequelize");
const sequelize = require("../loaders/sequelize");



const Provider = sequelize.define(
  "Providers",
  {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    image: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    bank: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    nrCta: {
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
module.exports = Provider;