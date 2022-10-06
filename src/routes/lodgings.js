const { Router } = require("express");
const {
  createLodging,
  getById,
  getAll,
  deleteLodging,
  updateLodging,
  uploadLodgingImage,
} = require("../controllers/lodging.js");
const {
  postRequestValidation,
  getRequestValidation,
  getAllRequestValidation,
  deleteRequestValidation,
  putRequestValidation,
  postImageRequestValidations,
} = require("../middlewares/lodging");

const router = Router();

router.post("/", postRequestValidation, createLodging);
router.get("/:id(\\d+)/", getRequestValidation, getById);
router.get("/", getAllRequestValidation, getAll);
router.delete("/:id(\\d+)/", deleteRequestValidation, deleteLodging);
router.put("/:id(\\d+)/", putRequestValidation, updateLodging);
router.post("/image", postImageRequestValidations, uploadLodgingImage);

module.exports = router;
