// models/associations.js

const User = require('./user');
const Product = require('./product');
const OrderDetail = require('./orderDetail');
const OrderFinal = require('./orderFinal');
const ProductRating = require('./productRating')

function setupAssociations() {
    // Asociación entre User y OrderDetail
    User.hasMany(OrderDetail, { foreignKey: 'user_id', as: 'orderDetails' });
    OrderDetail.belongsTo(User, { foreignKey: 'user_id', as: 'user' });

    // Asociación entre Product y OrderDetail
    Product.hasMany(OrderDetail, { foreignKey: 'product_id', as: 'orderDetails' });
    OrderDetail.belongsTo(Product, { foreignKey: 'product_id', as: 'product' });

    // Agrega más asociaciones si es necesario
    User.hasMany(OrderFinal, { foreignKey: 'user_id', as: 'orders' });
    OrderFinal.belongsTo(User, { foreignKey: 'user_id', as: 'user' });

    OrderFinal.hasMany(OrderDetail, { foreignKey: 'order_detail_id', as: 'orderDetails' });
    OrderDetail.belongsTo(OrderFinal, { foreignKey: 'order_detail_id', as: 'orderFinal' });

    // Asociación entre User y ProductRating
    User.hasMany(ProductRating, { foreignKey: 'user_id', as: 'productRatings' });
    ProductRating.belongsTo(User, { foreignKey: 'user_id', as: 'user' });

    // Asociación entre Product y ProductRating
    Product.hasMany(ProductRating, { foreignKey: 'product_id', as: 'productRatings' });
    ProductRating.belongsTo(Product, { foreignKey: 'product_id', as: 'product' });
}


module.exports = { setupAssociations };
