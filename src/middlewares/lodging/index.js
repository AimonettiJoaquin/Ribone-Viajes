const { check } = require("express-validator");
const multer = require("multer");
const upload = multer();
const { validationResult, imageRequired } = require("../commons");
const destinationService = require("../../services/destinationService");
const AppError = require("../../errors/appError");
const { ROLES, ADMIN_ROLE, USER_ROLE } = require("../../constants");
const { validJWT, hasRole } = require("../auth");

const _nameRequired = check("name", "Name required").not().isEmpty();
const _idDestinationIsNumeric = check("idDestination").isNumeric();
const _idDestinationRequired = check("idDestination").not().isEmpty();
const _idDestinationExist = check("idDestination").custom(async (idDestination = "") => {
  const destinationFound = await destinationService.findById(idDestination);
  if (!destinationFound) {
    throw new AppError("The destination id does not exist in DB", 400);
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

module.exports = {
  postRequestValidation,
};
