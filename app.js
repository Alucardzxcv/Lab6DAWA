const express = require('express');
const app = express();

app.use(express.static('public'));


// Configurar el motor de plantillas
app.set('view engine', 'pug');
app.set('views', './views');

// Ruta para renderizar la plantilla Pug
app.get('/', (req, res) => {
  res.render('inicio');
});

app.post('/habilidades',function (req, res)  {
    res.render('habilidades');
});

app.post('/contacto',function (req, res) {
    res.render('contacto');
});

app.post('/', function (req, res)  {
    res.render('inicio');
});



// Iniciar el servidor en el puerto 3000
app.listen(3000, () => {
  console.log('Aplicación web dinámica ejecutándose en el puerto 3000');
});
