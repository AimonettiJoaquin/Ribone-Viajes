const express = require("express");
const destinationService = require("../services/destinationService");
const Success = require("../handlers/successHandler");
const logger = require("../loaders/logger");

/**
 *
 * @param {express.Request} req
 * @param {express.Response} res
 */
const createDestination = async (req, res, next) => {
  try {
    logger.info("###############################");
    let d = req.body;
    
    const destinationCreate = await destinationService.save(d);

    res.status(201).json(new Success(destinationCreate));
  } catch (err) {
    next(err);
  }
};

module.exports = {
  createDestination,
};
