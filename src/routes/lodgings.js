const { Router } = require("express");
const { createLodging } = require("../controllers/lodging.js");
const { postRequestValidation } = require("../middlewares/lodging");

const router = Router();

router.post("/", postRequestValidation, createLodging);

module.exports = router;