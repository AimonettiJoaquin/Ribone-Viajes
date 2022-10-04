const express = require("express");
const lodgingService = require("../services/lodgingService.js");
const Success = require("../handlers/successHandler");
const logger = require("../loaders/logger");

/**
 *
 * @param {express.Request} req
 * @param {express.Response} res
 */
const createLodging = async (req, res, next) => {
  try {
    let lodging = req.body;
    const lodgingCreate = await lodgingService.save(lodging);

    res.status(201).json(new Success(lodgingCreate));
  } catch (err) {
    next(err);
  }
};

module.exports = { createLodging };