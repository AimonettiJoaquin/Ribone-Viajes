const ExpressServer = require("./server/expressServer");
const sequelize = require("./sequelize");
const config = require("../config");
const logger = require("./logger");

require("../models/destination");
require("../models/user");

module.exports = async () => {
  try {
    await sequelize.authenticate();
    await sequelize.sync({ alter: true }); // { alter: true } This checks what is the current state of the table in the database and then performs the necessary changes in the table to make it match the model.
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
