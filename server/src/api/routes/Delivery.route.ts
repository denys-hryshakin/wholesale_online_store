export { }
const express = require('express');
const controller = require('../controllers/Delivery.controller')

const router = express.Router();

router.get('/', controller.findAll)

module.exports = router;
