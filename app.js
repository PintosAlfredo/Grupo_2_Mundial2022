const express = require('express');
const path = require('path')
const app = express();
const publicPath = path.resolve(__dirname, './public')

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname,"./views/index.html"))
})

app.use(express.static('public'))

app.listen(8000, ()=>console.log('servidor corriendo'))
 
 

