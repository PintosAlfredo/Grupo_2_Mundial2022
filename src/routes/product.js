var express = require('express');
var router = express.Router();
const productsController=require('../controllers/productsController')


const multer=require('multer');
const path=require('path');
const {body}=require('express-validator');
const adminMiddleware = require('../middlewares/adminMiddleware');
const storage=multer.diskStorage({
    destination:(req, file, cb)=>{
        let ruta=(path.join(__dirname,'..','..','./public/img'))
        cb(null,ruta)
    },
    filename: (req, file, cb)=>{
        console.log(file);
        const fileName='producto-'+ Date.now() +path.extname(file.originalname);
        cb(null,fileName)
    }
})

const upload=multer({storage: storage})

const validarCrearProducto = [
    body('teamName')
        .notEmpty().withMessage('El campo nombre no puede estar vacío').bail(),
    body('descripcion')
        .notEmpty().withMessage('El campo descripcion no puede estar vacío')
]








/*** CREATE ONE PRODUCT ***/ 
router.get('/crear',adminMiddleware, productsController.create); 
router.post('/shop', upload.single('imagen'),validarCrearProducto, productsController.store); 


// /*** EDIT ONE PRODUCT ***/ 
router.get('/edit',adminMiddleware, productsController.editPage);
router.get('/edit/:id', adminMiddleware,productsController.edit); 
router.put('/:id', upload.single('imagen'), productsController.update); 


/* Devolver un producto */

router.get('/:id', productsController.productoDetail);

/*** DELETE ONE PRODUCT***/ 
router.delete('/:id/delete',adminMiddleware, productsController.destroy); 
module.exports = router;