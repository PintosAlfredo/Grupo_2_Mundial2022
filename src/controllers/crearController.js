const fs = require('fs');
const path = require('path');

const productsFilePath = path.join(__dirname, '../data/products.json');
let products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

const crearController={
    crearView: function(req, res, next) {
        res.render('crear')},
    crearStore: (req,res) => {
        let newProduct = {
            id: products[product.length - 1].id + 1,
            teamName: req.body.teamName,
            Size: req.body.Size,
            offer: req.body.offer,
            price: req.body.price
        }
        product.push(newProduct);
        fs.writeFileSync(productsFilePath, JSON.stringify(products, null, " "));
        res.redirect('/shop');
    },
}

module.exports=crearController