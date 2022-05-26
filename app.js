const express = require('express');
const hbs = require('hbs');

// Inicializando el server
const app = express();

// Configurando el motor de plantillas HANDLEBARS
app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/public/partials');


//Middlewares
app.use(express.json());
app.use(express.static('public'));

// Creando rutas
const ruta = {
   app: '/api'
}
app.use(ruta.app, require('./routes/control'));

// Corriendo el server
app.listen(4000, ()=>{
    console.log('App en el puerto 4000')
})