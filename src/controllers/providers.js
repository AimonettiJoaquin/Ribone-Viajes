const express = require("express");
const providerService = require("../services/providerService.js");
const imageService = require("../services/imageService");
const Success = require("../handlers/successHandler");
const logger = require("../loaders/logger");

/**
 *
 * @param {express.Request} req
 * @param {express.Response} res
 */
const createProvider = async (req, res, next) => {
  try {
    let p = req.body;
    const providerCreate = await providerService.save(p);

    res.status(201).json(new Success(providerCreate));
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
    const provider = await providerService.findById(req.params.id);
    res.json(new Success(provider));
  } catch (err) {
    next(err);
  }
};

/**
 *
 * @param {express.Request} req
 * @param {express.Response} res
 */
const getAllProvider = async (req, res, next) => {
  try {
    logger.info("Query: " + JSON.stringify(req.query));
    const { filter = "", options = "" } = req.query;
    const provider = await providerService.findAll(filter, options);
    res.json(new Success(provider));
  } catch (err) {
    next(err);
  }
};

/**
 *
 * @param {express.Request} req
 * @param {express.Response} res
 */
 const updateProvider = async (req, res, next) => {
  try {
    const { id } = req.params;
    let provider = req.body;
    const providerUpdated = await providerService.update(id, provider);
    res.json(new Success(providerUpdated));
  } catch (err) {
    next(err);
  }
};

/**
 *
 * @param {express.Request} req
 * @param {express.Response} res
 */
 const deleteProvider = async (req, res, next) => {
  try {
    const { id } = req.params;
    const provider = await providerService.remove(id);
    res.json(new Success(provider));
  } catch (err) {
    next(err);
  }
};

module.exports = {
  createProvider,
  getById,
  getAllProvider,
  updateProvider,
  deleteProvider
};
