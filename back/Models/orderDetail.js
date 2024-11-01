// models/OrderDetail.js

const { DataTypes } = require('sequelize');
const db = require('../config/db');

const OrderDetail = db.define('OrderDetail', {
    order_detail_id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    product_id: { type: DataTypes.INTEGER, allowNull: false },
    quantity: { type: DataTypes.INTEGER, allowNull: false },
    price: { type: DataTypes.DECIMAL(10, 2), allowNull: false }
}, {
    tableName: 'orderdetails',
    timestamps: false
});

module.exports = OrderDetail;