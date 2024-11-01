// models/Product.js

const { DataTypes } = require('sequelize');
const db = require('../config/db');
const ProductRating = require('./productRating');

// Definición del modelo Product
const Product = db.define('Product', {
    product_id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    title: { type: DataTypes.STRING, allowNull: false },
    type: { type: DataTypes.STRING },
    description: { type: DataTypes.TEXT },
    info_description: { type: DataTypes.TEXT },
    characteristics: { type: DataTypes.TEXT },
    image_url: { type: DataTypes.STRING },
    info_image_url: { type: DataTypes.STRING },
    price: { type: DataTypes.DECIMAL(10, 2), allowNull: false }
}, {
    tableName: 'products',
    timestamps: false
});
Product.hasMany(ProductRating, { foreignKey: 'product_id', as: 'ratings' });

module.exports = Product;
