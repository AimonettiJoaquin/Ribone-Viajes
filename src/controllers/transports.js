const express = require("express");
const transportService = require("../services/transportService.js");
const Success = require("../handlers/successHandler");
const logger = require("../loaders/logger");

/**
 *
 * @param {express.Request} req
 * @param {express.Response} res
 */
const createTransport = async (req, res, next) => {
  try {
    logger.info("###############################");
    let t = req.body;

    const transportCreate = await transportService.save(t);

    res.status(201).json(new Success(transportCreate));
  } catch (err) {
    next(err);
  }
};

module.exports = {
  createTransport,
};
