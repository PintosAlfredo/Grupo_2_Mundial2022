const fs = require('fs');
const path = require('path');

const productsFilePath = path.join(__dirname, '../data/products.json');
let products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

const modificarController={
    modificarView: function(req, res, next) {
        res.render('modificar')},
    modificarUpdate: (req, res) => {
        const id = req.params.id;
        const productToEdit = products.find(pruduct => product.id == id);
        const editProduct = {
            id: id,
            teamName: req.body.teamName,
            Size: req.body.Size,
            offer: req.body.offer,
            price: req.body.price
        }
        products.forEach((product, index) => {
            if(product.id == id) {
                products[index] = editProduct;
            }
        });
        fs.writeFileSync(productsFilePath, JSON.stringify(products, null, " "));
        res.redirect('/shop');
    },
    modificarDestroy: (req, res) => {
        const id = req.params.id;

        const finalProduct = products.filter(product => product.id != id);
        fs.writeFileSync(productsFilePath, JSON.stringify(finalProduct, null, " "));
        res.redirect('/shop');
    }

}

module.exports=modificarController