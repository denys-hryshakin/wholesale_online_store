export { }
const express = require('express');
const controller = require('../controllers/Contacts.controller')

const router = express.Router();

router.get('/', controller.findAll)

module.exports = router;
