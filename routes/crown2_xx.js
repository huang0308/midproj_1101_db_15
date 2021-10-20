var express = require('express');
var router = express.Router();
const crown2Controller_xx = require('../controllers/crown2Controller_xx');

/* GET home page. */
router.get('/', crown2Controller_xx.getCategories);

module.exports = router;
