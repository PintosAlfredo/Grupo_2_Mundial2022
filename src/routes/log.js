var express = require('express');
var router = express.Router();
const path=require('path')
const logController=require('../controllers/logController')

/* GET home page. */
router.get('/', logController.logView);

module.exports = router;
