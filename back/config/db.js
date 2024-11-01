// db.js
require('dotenv').config(); // Coloca esto al inicio
const Sequelize = require('sequelize');

const sequelize = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASSWORD,
    {
        host: process.env.DB_HOST,
        port: process.env.DB_PORT || 3306,
        dialect: 'mysql',
        logging: false, // Puedes cambiar esto a console.log para depuración
        pool: {
            max: 5,
            min: 0,
            acquire: 30000,
            idle: 10000
        },
        dialectOptions: {
            connectTimeout: 10000 // Tiempo de espera de conexión en milisegundos
        }
    }
);

module.exports = sequelize;
