const express = require('express');
const path = require('path')
const app = express();
const publicPath = path.resolve(__dirname, './public')
const port = process.env.PORT || 8000
app.use(express.static(publicPath))

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname,"./views/index.html"))
})

app.get('/product', (req, res) => {
    res.sendFile(path.join(__dirname,"./views/product.html"))
})
app.get('/log', (req, res) => {
    res.sendFile(path.join(__dirname,"./views/log.html"))
})
app.get('/register', (req, res) => {
    res.sendFile(path.join(__dirname,"./views/register.html"))
})
app.get('/shop', (req, res) => {
    res.sendFile(path.join(__dirname,"./views/shop.html"))
})
app.get('/about', (req, res) => {
    res.sendFile(path.join(__dirname,"./views/about.html"))
})
app.get('/contact', (req, res) => {
    res.sendFile(path.join(__dirname,"./views/contact.html"))
})

app.listen(port, ()=>console.log(`Servidor corriendo en puerto ${port}`))
 
 
