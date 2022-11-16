const express = require('express');
const path = require('path')
const app = express();
const publicPath = path.resolve(__dirname, '../public')
const port = process.env.PORT || 8000
const methodOverride =  require('method-override');

// ************ Middlewares - (don't touch) ************
app.use(express.json());
app.use(methodOverride('_method'));

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

/*----Routes-----*/
app.set('views', path.join(__dirname, 'views'));
const mainRouter=require('./routes/main')
const productRouter=require('./routes/product')
const logRouter=require('./routes/log')
const registerRouter=require('./routes/register')
const shopRouter=require('./routes/shop')
const aboutRouter=require('./routes/about')
const contactRouter=require('./routes/contact')
const cartRouter=require('./routes/cart')
const adminRouter=require('./routes/admin')
const modificarRouter=require('./routes/modificar')
const crearRouter=require('./routes/crear')

/*---View app---*/
app.use(express.static(publicPath))
app.use('/', mainRouter);
app.use('/product', productRouter)
app.use('/log', logRouter)
app.use('/register', registerRouter)
app.use('/shop',shopRouter)
app.use('/about',aboutRouter)
app.use('/contact',contactRouter)
app.use('/cart',cartRouter)
app.use('/administrator',adminRouter)
app.use('/modificar',modificarRouter)
app.use('/crear',crearRouter)



app.listen(port, ()=>console.log(`Servidor corriendo en puerto ${port}`))