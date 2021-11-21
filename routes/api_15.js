var express = require('express');
var router = express.Router();
const apiCrown2Controller_15 = require('../controllers/apiCrown2Controller_15');

/* crown_xx */
router.get('/category_15', apiCrown2Controller_15.getCategories);
router.get('/shop_15', apiCrown2Controller_15.getShop);
router.get('/shop_15/category');

/* midproj_xx */

/* finalproj_xx */

module.exports = router;
