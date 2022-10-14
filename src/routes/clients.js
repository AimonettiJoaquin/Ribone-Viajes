const { Router } = require("express");
const {
  createClient,
  getById,
  getAllClients,
  updateClient,
  deleteClient
} = require("../controllers/clients.js");
const {
  postRequestValidation,
  getRequestValidation,
  getAllRequestValidation,
  putRequestValidation,
  deleteRequestValidation
} = require("../middlewares/clients");
const router = Router();

router.post("/", postRequestValidation, createClient);
router.get("/:id(\\d+)/", getRequestValidation, getById);
router.get("/", getAllRequestValidation, getAllClients);
router.put("/:id(\\d+)/", putRequestValidation, updateClient);
router.delete("/:id(\\d+)/", deleteRequestValidation, deleteClient);

module.exports = router;
