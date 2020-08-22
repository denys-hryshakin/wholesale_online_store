export { }
const express = require('express');
const controller = require('../controllers/submenu.controller')

const router = express.Router();

router.get('/', controller.findAllPagination)
router.get('/all', controller.findAll)
router.get('/supersub/:parent_id', controller.findSuperSubmenu)

module.exports = router;
