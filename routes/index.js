var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express', name: '邵恩傑', id: '209410751' });
});

module.exports = router;
