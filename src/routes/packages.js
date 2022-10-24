const { Router } = require("express");
const {
  createPackage,
  getById,
  updatePackage,
  deletePackage,
  getAllPackages
} = require("../controllers/packages.js");
const {
  postRequestValidation,
  getRequestValidation,
  putRequestValidation,
  deleteRequestValidation,
  getAllRequestValidation,
  postImageRequestValidations
} = require("../middlewares/package");

const router = Router();

router.post("/", postRequestValidation, createPackage);
/* router.get("/:id(\\d+)/", getRequestValidation, getById);
router.put("/:id(\\d+)/", putRequestValidation, updatePackage);
router.delete("/:id(\\d+)/", deleteRequestValidation, deletePackage);
router.get("/", getAllRequestValidation, getAllPackages);
 */
module.exports = router;