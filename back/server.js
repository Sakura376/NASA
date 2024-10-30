// server.js
const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const dotenv = require('dotenv');
const db = require('./db'); // Importa la conexión a la base de datos

dotenv.config();

const app = express();
const port = process.env.PORT || 3001;

// Middlewares
app.use(morgan('dev'));
app.use(cors());
app.use(express.json());

// Ruta de prueba para verificar la conexión a la base de datos
app.get('/test-db', async (req, res) => {
    try {
        // Realiza una consulta simple para verificar la conexión
        const [rows] = await db.query('SELECT 1 + 1 AS solution');
        res.json({ message: 'Conexión exitosa a la base de datos', solution: rows[0].solution });
    } catch (error) {
        console.error('Error al conectar con la base de datos:', error);
        res.status(500).json({ error: 'Error de conexión a la base de datos' });
    }
});

// Iniciar el servidor
app.listen(port, () => {
    console.log(`Servidor corriendo en http://localhost:${port}`);
});
