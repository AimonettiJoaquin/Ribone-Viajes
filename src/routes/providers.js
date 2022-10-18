const { Router } = require("express");
const {
  createProvider,
 /*  getById,
  updateDestination,
  deleteDestination,
  getAllDestinations,
  uploadDestinationImage */
} = require("../controllers/providers.js");
const {
  postRequestValidation,
  getRequestValidation,
  putRequestValidation,
  deleteRequestValidation,
  getAllRequestValidation,
  postImageRequestValidations
} = require("../middlewares/providers");

const router = Router();
router.post("/", postRequestValidation, createProvider);
/* router.get("/:id(\\d+)/", getRequestValidation, getById); */
/* router.put("/:id(\\d+)/", putRequestValidation, updateDestination);*/
/* router.delete("/:id(\\d+)/", deleteRequestValidation, deleteDestination);*/
/* router.get("/", getAllRequestValidation, getAllDestinations); */
/* router.post("/image", postImageRequestValidations, uploadDestinationImage); */

module.exports = router;
