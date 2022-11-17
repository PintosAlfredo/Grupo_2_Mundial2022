var express = require('express');
var router = express.Router();
const crearController=require('../controllers/crearController')

const uploadFile = require('../middlewares/multerMiddleware');

/* Crear un producto */
router.get('/', crearController.crearView);
router.post('/', uploadFile.single("imgFile"), crearController.crearStore);



module.exports = router;