const { Router } = require("express");
const {
  createProvider,
  getById,
  getAllProvider,
} = require("../controllers/providers.js");
const {
  postRequestValidation,
  getRequestValidation,
  putRequestValidation,
  deleteRequestValidation,
  getAllRequestValidation,
  postImageRequestValidations,
} = require("../middlewares/providers");

const router = Router();
router.post("/", postRequestValidation, createProvider);
router.get("/:id(\\d+)/", getRequestValidation, getById);
router.get("/", getAllRequestValidation, getAllProvider);
/* router.put("/:id(\\d+)/", putRequestValidation, updateDestination);*/
/* router.delete("/:id(\\d+)/", deleteRequestValidation, deleteDestination);*/

/* router.post("/image", postImageRequestValidations, uploadDestinationImage); */

module.exports = router;
