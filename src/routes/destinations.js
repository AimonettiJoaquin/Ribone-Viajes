const { Router } = require("express");
const {
  createDestination
} = require("../controllers/destinations");
const {
  postRequestValidations,
} = require("../middlewares/destinations");

const router = Router();


router.post("/", postRequestValidations, createDestination);


module.exports = router;
