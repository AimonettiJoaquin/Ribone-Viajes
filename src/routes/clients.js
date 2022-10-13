const { Router } = require("express");
const {
  createClient,
  getById,
  getAllClients,
} = require("../controllers/clients.js");
const {
  postRequestValidation,
  getRequestValidation,
  getAllRequestValidation,
} = require("../middlewares/clients");
const router = Router();

router.post("/", postRequestValidation, createClient);
router.get("/:id(\\d+)/", getRequestValidation, getById);
router.get("/", getAllRequestValidation, getAllClients);

module.exports = router;
