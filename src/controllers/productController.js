const fs = require('fs');
const path = require('path');

const productsFilePath = path.join(__dirname, '../data/products.json');
let products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

const productController={
    productView: function(req, res, next) {
        res.render('product')},
    productDetail: (req, res) => {
        const id = req.params.id;
        const product = products.find(product => product.id == id);
        res.render('product', {
            product
        })}
}

module.exports=productController