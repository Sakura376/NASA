// models/ProductRating.js

const { DataTypes } = require('sequelize');
const db = require('../config/db');

// Definición del modelo ProductRating
const ProductRating = db.define('ProductRating', {
    rating_id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    product_id: { type: DataTypes.INTEGER, allowNull: false },
    user_id: { type: DataTypes.INTEGER, allowNull: false },
    rating: { type: DataTypes.INTEGER, allowNull: false, validate: { min: 1, max: 5 } },
    rating_date: { type: DataTypes.DATE, allowNull: false, defaultValue: DataTypes.NOW }
}, {
    tableName: 'product_ratings', // Nombre de la tabla en MySQL
    timestamps: false             // No añade las columnas createdAt y updatedAt
});

module.exports = ProductRating;

