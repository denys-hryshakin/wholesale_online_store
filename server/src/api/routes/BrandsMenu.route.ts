export {};
const express = require("express");
const controller = require("../controllers/BrandsMenu.controller");

const router = express.Router();

router.post("/add_item", controller.addItem);
router.get("/", controller.findAll);

module.exports = router;
