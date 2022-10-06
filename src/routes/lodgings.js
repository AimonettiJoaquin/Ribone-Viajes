const { Router } = require("express");
const { createLodging, getById, getAll } = require("../controllers/lodging.js");
const {
  postRequestValidation,
  getRequestValidation,
  getAllRequestValidation,
} = require("../middlewares/lodging");

const router = Router();

router.post("/", postRequestValidation, createLodging);
router.get("/:id(\\d+)/", getRequestValidation, getById);
router.get("/", getAllRequestValidation, getAll);

module.exports = router;
