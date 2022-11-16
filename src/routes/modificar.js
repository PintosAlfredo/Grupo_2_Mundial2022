var express = require('express');
var router = express.Router();
const modificarController=require('../controllers/modificarController')

const uploadFile = require('../middlewares/multerMiddleware');

// *** Edit a product *****/

router.get('/product/:id', modificarController.modificarView);
router.put('/product/:id', uploadFile.single('imgFile'), modificarController.modificarUpdate);

// *** Delete a product *****/

router.delete('/product/:id', modificarController.modificarDestroy);

module.exports = router;