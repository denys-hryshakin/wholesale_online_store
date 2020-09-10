export {};
const express = require("express");
const controller = require("../controllers/CatalogMenu.controller");

const router = express.Router();

router.get("/", controller.findAll);

module.exports = router;
