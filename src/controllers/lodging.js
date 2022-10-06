const express = require("express");
const lodgingService = require("../services/lodgingService.js");
const imageService = require("../services/imageService");
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

/**
/**
 *
 * @param {express.Request} req
 * @param {express.Response} res
 */
const deleteLodging = async (req, res, next) => {
  try {
    const { id } = req.params;
    const lodging = await lodgingService.remove(id);
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
const updateLodging = async (req, res, next) => {
  try {
    const { id } = req.params;
    let lodging = req.body;
    const lodgingUpdated = await lodgingService.update(id, lodging);
    res.json(new Success(lodgingUpdated));
  } catch (err) {
    next(err);
  }
};

/**
 *
 * @param {express.Request} req
 * @param {express.Response} res
 */
const uploadLodgingImage = async (req, res, next) => {
  try {
    const lodgingId = req.body.id;
    const image = req.file;

    res.json(
      new Success(await imageService.uploadLodgingImage(lodgingId, image))
    );
  } catch (err) {
    next(err);
  }
};

module.exports = {
  createLodging,
  getById,
  getAll,
  deleteLodging,
  updateLodging,
  uploadLodgingImage,
};
