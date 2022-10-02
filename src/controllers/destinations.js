const express = require("express");
const destinationService = require("../services/destinationService");
const imageService = require("../services/imageService");
const Success = require("../handlers/successHandler");
const logger = require("../loaders/logger");

/**
 *
 * @param {express.Request} req
 * @param {express.Response} res
 */
const createDestination = async (req, res, next) => {
  try {
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

/**
 *
 * @param {express.Request} req
 * @param {express.Response} res
 */
const getAllDestinations = async (req, res, next) => {
  try {
    logger.info("Query: " + JSON.stringify(req.query));
    const { filter = "", options = "" } = req.query;
    const destination = await destinationService.findAll(filter, options);
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
const uploadDestinationImage = async (req, res, next) => {
  try {
    const destinationId = req.body.id;
    const image = req.file;

    res.json(
      new Success(
        await imageService.uploadDestinationImage(destinationId, image)
      )
    );
  } catch (err) {
    next(err);
  }
};

module.exports = {
  createDestination,
  getById,
  updateDestination,
  deleteDestination,
  getAllDestinations,
  uploadDestinationImage,
};
