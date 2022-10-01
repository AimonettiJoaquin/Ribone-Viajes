const { Router } = require("express");
const router = Router();

const {
    createTransport
  } = require("../controllers/transports.js");

const { postRequestValidation } = require("../middlewares/transports");

router.post("/", postRequestValidation, createTransport);

module.exports = router;
 