require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const reservasRouter = require('./routes/ventas.routes');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(bodyParser.json());

// Rutas
app.use('/', reservasRouter);

// Iniciar servidor
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
