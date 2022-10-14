const { Router } = require("express");
/* const {
  createDestination,
  getById,
  updateDestination,
  deleteDestination,
  getAllDestinations,
  uploadDestinationImage
} = require("../controllers/destinations.js");
const {
  postRequestValidation,
  getRequestValidation,
  putRequestValidation,
  deleteRequestValidation,
  getAllRequestValidation,
  postImageRequestValidations
} = require("../middlewares/destinations"); */

const router = Router();

/* router.post("/", postRequestValidation, createDestination);
router.get("/:id(\\d+)/", getRequestValidation, getById);
router.put("/:id(\\d+)/", putRequestValidation, updateDestination);
router.delete("/:id(\\d+)/", deleteRequestValidation, deleteDestination);
router.get("/", getAllRequestValidation, getAllDestinations);
router.post("/image", postImageRequestValidations, uploadDestinationImage); */

module.exports = router;
