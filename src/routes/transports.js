const { Router } = require("express");
const router = Router();

const {
  createTransport,
  updateTransport,
  deleteTransport
} = require("../controllers/transports.js");

const {
  postRequestValidation,
  putRequestValidation,
  deleteRequestValidation
} = require("../middlewares/transports");

router.post("/", postRequestValidation, createTransport);
router.put("/:id(\\d+)/", putRequestValidation, updateTransport);
router.delete("/:id(\\d+)/", deleteRequestValidation, deleteTransport);

module.exports = router;
