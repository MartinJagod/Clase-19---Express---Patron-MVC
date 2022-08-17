const express = require('express');

const app = express();

app.listen(3000, ()=> console.log("Servidor corriendo en purto 3000"));

app.use(express.static(__dirname + '/public'));

const productsRoutes = require("./routers/products.js")
const usersRoutes = require("./routers/users");
const mainRoutes = require("./routers/main")
// rutas

app.use('/products', productsRoutes);
app.use('/users', usersRoutes);
app.use('/', mainRoutes);



