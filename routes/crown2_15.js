var express = require('express');
var router = express.Router();
const crown2Controller_15 = require('../controllers/crown_15/crown2Controller_15');

/* GET home page. */
router.get('/', crown2Controller_15.getCategories);

module.exports = router;
