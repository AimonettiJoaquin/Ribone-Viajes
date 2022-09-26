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

/**
 *
 * @param {express.Request} req
 * @param {express.Response} res
 */
const getById = async (req, res) => {
  try {
    const destination = await destinationService.findById(req.params.id);
    res.json(new Success(destination));
  } catch (err) {
    next(err);
  }
};

/**
 *
 * @param {express.Request} req
 * @param {express.Response} res
 */
const updateDestination = async (req, res, next) => {
  try {
    const { id } = req.params;
    let destination = req.body;
    const destinationUpdated = await destinationService.update(id, destination);
    res.json(new Success(destinationUpdated));
  } catch (err) {
    next(err);
  }
};

/**
 *
 * @param {express.Request} req
 * @param {express.Response} res
 */
 const deleteDestination = async (req, res, next) => {
  try {
    const { id } = req.params;
    const destination = await destinationService.remove(id);
    res.json(new Success(destination));
  } catch (err) {
    next(err);
  }
};

module.exports = {
  createDestination,
  getById,
  updateDestination,
  deleteDestination
};
