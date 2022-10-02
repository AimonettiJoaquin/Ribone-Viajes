const { Router } = require("express");
const router = Router();

const {
  createTransport,
  updateTransport,
  deleteTransport,
  getById,
  getAllTransports
} = require("../controllers/transports.js");

const {
  postRequestValidation,
  putRequestValidation,
  deleteRequestValidation,
  getRequestValidation,
  getAllRequestValidation
} = require("../middlewares/transports");

router.post("/", postRequestValidation, createTransport);
router.put("/:id(\\d+)/", putRequestValidation, updateTransport);
router.delete("/:id(\\d+)/", deleteRequestValidation, deleteTransport);
router.get("/:id(\\d+)/", getRequestValidation, getById);
router.get("/", getAllRequestValidation, getAllTransports);

module.exports = router;
