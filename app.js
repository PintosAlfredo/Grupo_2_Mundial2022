const express = require('express');
const path = require('path')
const app = express();
const publicPath = path.resolve(__dirname, './public')
const port = process.env.PORT || 8000


app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname,"./views/index.html"))
})

app.get('/productos', (req, res) => {
    res.sendFile(path.join(__dirname,"./views/productos.html"))
})
app.get('/login', (req, res) => {
    res.sendFile(path.join(__dirname,"./views/login.html"))
})
app.get('/signin', (req, res) => {
    res.sendFile(path.join(__dirname,"./views/signin.html"))
})
app.get('/shop', (req, res) => {
    res.sendFile(path.join(__dirname,"./views/shop.html"))
})
app.get('/aboutus', (req, res) => {
    res.sendFile(path.join(__dirname,"./views/nosotros.html"))
})
app.get('/contacto', (req, res) => {
    res.sendFile(path.join(__dirname,"./views/contacto.html"))
})
app.use(express.static('public'))

app.listen(port, ()=>console.log(`servidor corriendo en puerto ${port}`))
 
 
