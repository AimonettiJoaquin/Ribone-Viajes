const { Router } = require("express");
const {
  createDestination,
  getById,
  updateDestination,
} = require("../controllers/destinations.js");
const {
  postRequestValidation,
  getRequestValidation,
  putRequestValidation,
} = require("../middlewares/destinations");

const router = Router();

router.post("/", postRequestValidation, createDestination);
router.get("/:id(\\d+)/", getRequestValidation, getById);
router.put("/:id(\\d+)/", putRequestValidation, updateDestination);

module.exports = router;
