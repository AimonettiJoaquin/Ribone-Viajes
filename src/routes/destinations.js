const { Router } = require("express");
const {
  createDestination,
  getById,
  updateDestination,
  deleteDestination,
} = require("../controllers/destinations.js");
const {
  postRequestValidation,
  getRequestValidation,
  putRequestValidation,
  deleteRequestValidation,
} = require("../middlewares/destinations");

const router = Router();

router.post("/", postRequestValidation, createDestination);
router.get("/:id(\\d+)/", getRequestValidation, getById);
router.put("/:id(\\d+)/", putRequestValidation, updateDestination);
router.delete("/:id(\\d+)/", deleteRequestValidation, deleteDestination);

module.exports = router;
