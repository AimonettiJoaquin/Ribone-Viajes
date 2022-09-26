const { check } = require("express-validator");
const { validationResult } = require("../commons");
const destinationService = require("../../services/destinationService");
const AppError = require("../../errors/appError");
const { ROLES, ADMIN_ROLE, USER_ROLE } = require("../../constants");
const { validJWT, hasRole } = require("../auth");

const _nameRequired = check("name", "Name required").not().isEmpty();
const _idRequired = check("id").not().isEmpty();
const _idExist = check("id").custom(async (id = "") => {
  const destinationFound = await destinationService.findById(id);
  if (!destinationFound) {
    throw new AppError("The id does not exist in DB", 400);
  }
});
const _idIsNumeric = check("id").isNumeric();

const postRequestValidations = [
  validJWT,
  hasRole(ADMIN_ROLE),
  _nameRequired,
  validationResult,
];
const getRequestValidation = [
  validJWT,
  _idRequired,
  _idIsNumeric,
  _idExist,
  validationResult,
];

module.exports = {
  postRequestValidations,
  getRequestValidation,
};
