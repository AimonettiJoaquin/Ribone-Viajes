const { check } = require("express-validator");
const { validationResult } = require("../commons");
const logger = require("../../loaders/logger");


const _nameRequired = check("name", "Name required").not().isEmpty();
logger.info("#######################################");
const postRequestValidations = [_nameRequired, validationResult];

module.exports = {
  postRequestValidations,
};
