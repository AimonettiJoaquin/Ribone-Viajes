const express = require("express");
const clientService = require("../services/clientService.js");
const Success = require("../handlers/successHandler");
const logger = require("../loaders/logger");

/**
 *
 * @param {express.Request} req
 * @param {express.Response} res
 */
const createClient = async (req, res, next) => {
  try {
    let c = req.body;
    const clientCreate = await clientService.save(c);

    res.status(201).json(new Success(clientCreate));
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
    const client = await clientService.findById(req.params.id);
    res.json(new Success(client));
  } catch (err) {
    next(err);
  }
};

/**
 *
 * @param {express.Request} req
 * @param {express.Response} res
 */
 const getAllClients = async (req, res, next) => {
  try {
    logger.info("Query: " + JSON.stringify(req.query));
    const { filter = "", options = "" } = req.query;
    const client = await clientService.findAll(filter, options);
    res.json(new Success(client));
  } catch (err) {
    next(err);
  }
};

module.exports = {
  createClient,
  getById,
  getAllClients
};
