// db.js
const mysql = require('mysql2');
require('dotenv').config(); // Cargar las variables de entorno

// Crear una conexión con un pool de conexiones
const pool = mysql.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
});

// Exportar la conexión con promesas
module.exports = pool.promise();
