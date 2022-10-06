const { check } = require("express-validator");
const multer = require("multer");
const upload = multer();
const { validationResult, imageRequired } = require("../commons");
const destinationService = require("../../services/destinationService");
const lodgingService = require("../../services/lodgingService");
const AppError = require("../../errors/appError");
const { ROLES, ADMIN_ROLE, USER_ROLE } = require("../../constants");
const { validJWT, hasRole } = require("../auth");

const _nameRequired = check("name", "Name required").not().isEmpty();
const _idDestinationIsNumeric = check("destinationId").isNumeric();
const _idDestinationRequired = check("destinationId").not().isEmpty();
const _idDestinationExist = check("destinationId").custom(
  async (idDestination = "") => {
    const destinationFound = await destinationService.findById(idDestination);
    if (!destinationFound) {
      throw new AppError("The destination id does not exist in DB", 400);
    }
  }
);
const _idIsNumeric = check("id").isNumeric();
const _idRequired = check("id").not().isEmpty();
const _idExist = check("id").custom(async (id = "") => {
  const lodgingFound = await lodgingService.findById(id);
  if (!lodgingFound) {
    throw new AppError("The lodging's id does not exist in DB", 400);
  }
});

const postRequestValidation = [
  validJWT,
  hasRole(ADMIN_ROLE),
  _nameRequired,
  _idDestinationIsNumeric,
  _idDestinationRequired,
  _idDestinationExist,
  validationResult,
];

const getRequestValidation = [
  validJWT,
  _idRequired,
  _idIsNumeric,
  _idExist,
  validationResult,
];

const deleteRequestValidation = [
  validJWT,
  hasRole(ADMIN_ROLE),
  _idRequired,
  _idExist,
  validationResult,
];

const getAllRequestValidation = [validJWT];
module.exports = {
  postRequestValidation,
  getRequestValidation,
  getAllRequestValidation,
  deleteRequestValidation
};
