var express = require('express');
var router = express.Router();
const path=require('path')
const registerController=require('../controllers/registerController')

/* GET home page. */
router.get('/', registerController.registerView);

module.exports = router;