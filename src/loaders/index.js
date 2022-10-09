const ExpressServer = require("./server/expressServer");
const sequelize = require("./sequelize");
const config = require("../config");
const logger = require("./logger");

require("../models/destination");
require("../models/user");
require("../models/transport");
require("../models/lodging");
require("../models/client");

module.exports = async () => {
  try {
    await sequelize.authenticate();
    await sequelize.sync(/* { alter: true } */);
    logger.info("Models were synchronized successfully.");
    const server = new ExpressServer();
    logger.info("Express Loaded");
    logger.info("DB loaded and connected");
    server.start();
    logger.info(`#######################################
      Server listening on port: ${config.port}
      #######################################
    `);
  } catch (error) {
    logger.error("Unable to connect to the database:", error);
  }
};
