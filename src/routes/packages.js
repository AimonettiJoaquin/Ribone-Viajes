const { Router } = require("express");
const {
  createPackage,
  getById,
  updatePackage,
  deletePackage,
  getAllPackages,
} = require("../controllers/packages.js");
const {
  postRequestValidation,
  getRequestValidation,
  getAllRequestValidation,
  putRequestValidation,
  deleteRequestValidation,
  postImageRequestValidations,
} = require("../middlewares/package");

const router = Router();

router.post("/", postRequestValidation, createPackage);
router.get("/:id(\\d+)/", getRequestValidation, getById);
router.get("/", getAllRequestValidation, getAllPackages);
router.put("/:id(\\d+)/", putRequestValidation, updatePackage);
/* router.delete("/:id(\\d+)/", deleteRequestValidation, deletePackage); */
module.exports = router;