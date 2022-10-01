const express = require('express');
const bodyParser = require('body-parser');
// creamos la app
const app = express();
// configuramos el puerto del servicio
const port = process.env.PORT || 5000;
app.use(bodyParser.urlencoded({ extended: true }))
// parseo para contenido con json
app.use(bodyParser.json())
// definismos una ruta de prueba del servicio
app.get('/', (req, res) => {
  res.send("Hello World");
});
// configuramos la ruta de empleados
const rutas = require('./src/routes/empleado.routes');

// usamos un midleware para las rutas
app.use('/api/v1/empleados', rutas)
// ponemos a escuchar el puerto
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});