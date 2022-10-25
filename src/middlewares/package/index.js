const { check } = require("express-validator");
const { validationResult } = require("../commons");
const packageService = require("../../services/packageService");
const AppError = require("../../errors/appError");
const { ROLES, ADMIN_ROLE, USER_ROLE } = require("../../constants");
const { validJWT, hasRole } = require("../auth");

const _departureRequired = check("departureDate", "Departure date required").not().isEmpty();
const _durationRequired = check("duration", "Duration required").not().isEmpty();
const _regimenRequired = check("regimen", "Regimen required").not().isEmpty();
const _fromRequired = check("from", "Departure location required").not().isEmpty();
const _routeRequired = check("route", "Route required").not().isEmpty();
const _idRequired = check("id").not().isEmpty();
const _idExist = check("id").custom(async (id = "") => {
  const packageFound = await packageService.findById(id);
  if (!packageFound) {
    throw new AppError("The id does not exist in DB", 400);
  }
});
const _idIsNumeric = check("id").isNumeric();
const _roleValid = check("role")
  .optional()
  .custom(async (role = "") => {
    if (!ROLES.includes(role)) {
      throw new AppError("Ivalid Role", 400);
    }
  });

const postRequestValidation = [
  validJWT,
  hasRole(ADMIN_ROLE),
  _departureRequired,
  _durationRequired,
  _regimenRequired,
  _fromRequired,
  _routeRequired,
  validationResult,
];
const getRequestValidation = [
  validJWT,
  _idRequired,
  _idIsNumeric,
  _idExist,
  validationResult,
];

const putRequestValidation = [
  validJWT,
  hasRole(ADMIN_ROLE),
  _idRequired,
  _idExist,
  _idIsNumeric,
  _roleValid,
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
  putRequestValidation,
  deleteRequestValidation,
  getAllRequestValidation,
};
