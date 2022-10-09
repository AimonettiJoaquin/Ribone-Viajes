const { Router } = require("express");
const { createClient } = require("../controllers/clients.js");
const { postRequestValidation } = require("../middlewares/clients");
const router = Router();

router.post("/", postRequestValidation, createClient);

module.exports = router;
