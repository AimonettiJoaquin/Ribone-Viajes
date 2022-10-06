const { Router } = require("express");
const { createLodging, getById, getAll, deleteLodging, updateLodging } = require("../controllers/lodging.js");
const {
  postRequestValidation,
  getRequestValidation,
  getAllRequestValidation,
  deleteRequestValidation,
  putRequestValidation
} = require("../middlewares/lodging");

const router = Router();

router.post("/", postRequestValidation, createLodging);
router.get("/:id(\\d+)/", getRequestValidation, getById);
router.get("/", getAllRequestValidation, getAll);
router.delete("/:id(\\d+)/", deleteRequestValidation, deleteLodging);
router.put("/:id(\\d+)/", putRequestValidation, updateLodging);

module.exports = router;