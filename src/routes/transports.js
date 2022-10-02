const { Router } = require("express");
const router = Router();

const {
  createTransport,
  updateTransport,
} = require("../controllers/transports.js");

const {
  postRequestValidation,
  putRequestValidation,
} = require("../middlewares/transports");

router.post("/", postRequestValidation, createTransport);
router.put("/:id(\\d+)/", putRequestValidation, updateTransport);

module.exports = router;
