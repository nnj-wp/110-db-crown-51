var express = require('express');
var router = express.Router();
const crown2Controller_51 = require('../controllers/crown2Controller_51')

/* GET home page. */
router.get('/', crown2Controller_51.getCategories);

module.exports = router;
