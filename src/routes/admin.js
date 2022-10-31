var express = require('express');
var router = express.Router();
const path=require('path')
const adminController=require('../controllers/adminController')

/* GET home page. */
router.get('/', adminController.adminView);
router.get('/crear', adminController.adminCrear);
router.get('/modificar', adminController.adminModificar);
module.exports = router;