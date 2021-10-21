var express = require('express');
var router = express.Router();
const apiCrown2Controller_51 = require('../controllers/apiCrown2Controller_51');

/* GET home page. */
router.get('/Category_51', apiCrown2Controller_51.getCategories);

module.exports = router;
