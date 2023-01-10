var express = require('express');
const { detail } = require('../controllers/producController');
var router = express.Router();


router.get('/detail/:id', detail)



module.exports = router;