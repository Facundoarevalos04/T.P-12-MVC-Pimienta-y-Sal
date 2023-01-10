var express = require('express');
var router = express.Router();

const product= require('../controllers/indexControlles')

router
     .get('/',product.index)

module.exports = router;
