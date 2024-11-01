// models/index.js

const User = require('./user');
const Product = require('./product');
const OrderDetail = require('./orderDetail');
const OrderFinal = require('./orderFinal')
const ProductRating = require('./productRating');
// Importa otros modelos si los tienes

const { setupAssociations } = require('./associations');

// Establecer las asociaciones
setupAssociations();

module.exports = {
    User,
    Product,
    OrderFinal,
    OrderDetail,
    ProductRating,
    // Exporta otros modelos
};