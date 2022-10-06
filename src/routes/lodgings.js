const { Router } = require("express");
const { createLodging, getById, getAll, deleteLodging } = require("../controllers/lodging.js");
const {
  postRequestValidation,
  getRequestValidation,
  getAllRequestValidation,
  deleteRequestValidation,
} = require("../middlewares/lodging");

const router = Router();

router.post("/", postRequestValidation, createLodging);
router.get("/:id(\\d+)/", getRequestValidation, getById);
router.get("/", getAllRequestValidation, getAll);
router.delete("/:id(\\d+)/", deleteRequestValidation, deleteLodging);

module.exports = router;