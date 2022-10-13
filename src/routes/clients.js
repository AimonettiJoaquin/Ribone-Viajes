const { Router } = require("express");
const {
  createClient,
  getById,
  getAllClients,
  updateClient
} = require("../controllers/clients.js");
const {
  postRequestValidation,
  getRequestValidation,
  getAllRequestValidation,
  putRequestValidation
} = require("../middlewares/clients");
const router = Router();

router.post("/", postRequestValidation, createClient);
router.get("/:id(\\d+)/", getRequestValidation, getById);
router.get("/", getAllRequestValidation, getAllClients);
router.put("/:id(\\d+)/", putRequestValidation, updateClient);

module.exports = router;
