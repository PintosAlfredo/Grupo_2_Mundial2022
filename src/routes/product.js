var express = require('express');
var router = express.Router();
const productController=require('../controllers/productController')

/* GET home page. */
router.get('/', productController.productView);

/* Devolver un producto */

router.get('/product/:id', productController.productDetail);


module.exports = router;