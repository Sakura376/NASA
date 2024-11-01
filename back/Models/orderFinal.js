// models/Order.js

const { DataTypes } = require('sequelize');
const db = require('../config/db');

// Definición del modelo Order
const Order = db.define('OrderFinal', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    user_id: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    total: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false,
        validate: {
            min: 0.0
        }
    },
    order_date: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: DataTypes.NOW
    }
}, {
    tableName: 'orderfinal',   // Nombre de la tabla en la base de datos
    timestamps: false          // No añade columnas createdAt y updatedAt
});

// Exportar el modelo
module.exports = Order;
