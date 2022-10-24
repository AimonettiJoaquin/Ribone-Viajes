const { check } = require("express-validator");
const multer = require("multer");
const upload = multer();
const { validationResult, imageRequired } = require("../commons");
const providerService = require("../../services/providerService");
const AppError = require("../../errors/appError");
const { ROLES, ADMIN_ROLE, USER_ROLE } = require("../../constants");
const { validJWT, hasRole } = require("../auth");

const _nameRequired = check("name", "Name required").not().isEmpty();
const _idRequired = check("id").not().isEmpty();
const _idExist = check("id").custom(async (id = "") => {
  const providerFound = await providerService.findById(id);
  if (!providerFound) {
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

const postImageRequestValidations = [
  validJWT,
  hasRole(USER_ROLE, ADMIN_ROLE),
  upload.single('image'),
  _idRequired,
  _idIsNumeric,
  _idExist,
  imageRequired,
  validationResult,
];

module.exports = {
  postRequestValidation,
  getRequestValidation,
  putRequestValidation,
  deleteRequestValidation,
  getAllRequestValidation,
  postImageRequestValidations
};
