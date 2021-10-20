var express = require('express');
var router = express.Router();
const apiCrown2Controller_xx = require('../controllers/apiCrown2Controller_xx');

/* GET home page. */
router.get('/category_xx', apiCrown2Controller_xx.getCategories);

module.exports = router;
