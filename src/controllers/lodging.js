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

/**
 *
 * @param {express.Request} req
 * @param {express.Response} res
 */
const getById = async (req, res) => {
  try {
    const lodging = await lodgingService.findById(req.params.id);
    res.json(new Success(lodging));
  } catch (err) {
    next(err);
  }
};

/**
 *
 * @param {express.Request} req
 * @param {express.Response} res
 */
const getAll = async (req, res, next) => {
  try {
    logger.info("Query: " + JSON.stringify(req.query));
    const { filter = "", options = "" } = req.query;
    const lodging = await lodgingService.findAll(filter, options);
    res.json(new Success(lodging));
  } catch (err) {
    next(err);
  }
};

module.exports = { createLodging, getById, getAll };
