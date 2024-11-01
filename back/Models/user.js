// models/user.js
const Sequelize = require('sequelize');
const db = require('../config/db');
const OrderDetail = require('./orderDetail')

const User = db.define('User', {
    user_id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    username: Sequelize.STRING,
    email: Sequelize.STRING,
    password: Sequelize.STRING,
    created_at: Sequelize.DATE
}, {
    timestamps: false,
    tableName: 'users' // Aseguramos que Sequelize use la tabla 'users'
});

module.exports = User;
