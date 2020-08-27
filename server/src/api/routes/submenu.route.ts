export { }
const express = require('express');
const controller = require('../controllers/submenu.controller')

const router = express.Router();

router.get('/', controller.findAllPagination)
router.post('/', controller.postSubmenuItem)

module.exports = router;
