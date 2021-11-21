var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', {
    title: 'Express',
    name: 'Tzuchia Huang',
    id: '209410215',
  });
});

module.exports = router;
