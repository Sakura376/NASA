// server.js

require('dotenv').config();
const express = require('express');
const app = express();
const db = require('./config/db');
const models = require('./Models'); // Importa los modelos y establece las asociaciones
const cors = require('cors');
app.use(cors());


// Middlewares
app.use(express.json());

// Rutas
const apiRoutes = require('./routes/api');
app.use('/api', apiRoutes);

// Iniciar el servidor
const PORT = process.env.PORT || 3002;
db.authenticate()
    .then(() => {
        console.log('Conexión a la base de datos establecida correctamente.');
        app.listen(PORT, () => {
            console.log(`Servidor funcionando en el puerto ${PORT}`);
        });
    })
    .catch(err => {
        console.error('No se pudo conectar a la base de datos:', err);
    });

module.exports = app;
