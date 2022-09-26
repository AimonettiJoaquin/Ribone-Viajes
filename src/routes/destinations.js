const { Router } = require("express");
const {
  createDestination,
  getById
} = require("../controllers/destinations.js");
const {
  postRequestValidations,
  getRequestValidation
} = require("../middlewares/destinations");

const router = Router();


router.post("/", postRequestValidations, createDestination);
router.get("/:id(\\d+)/", getRequestValidation, getById);


module.exports = router;