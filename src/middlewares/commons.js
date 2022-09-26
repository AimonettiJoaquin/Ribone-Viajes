const { validationResult } = require("express-validator");
const AppError = require("../errors/appError");
const { checkSchema } = require('express-validator');

const validResult = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    throw new AppError("Validation Errors", 400, errors.errors);
  }
  next();
};
const imageRequired = checkSchema({
  'image': {
    custom: {
      options: (value, { req }) => !!req.file,
      errorMessage: "You should upload a image",
    },
  },
});

module.exports = {
  validationResult: validResult,
  imageRequired
};
