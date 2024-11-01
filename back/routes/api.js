const express = require('express');
const router = express.Router();

const userRoutes = require('./userRoutes');
const productRoutes = require('./productRoutes');
const orderDetailRoutes = require('./orderDetailsRoutes');
const orderFinalRoutes = require('./orderFinalRoutes');
const productRatingRoutes = require('./productRatingRoutes');

router.use('/users', userRoutes);
router.use('/products', productRoutes);
router.use('/order-details', orderDetailRoutes);
router.use('/orders-finals', orderFinalRoutes);
router.use('/ratings', productRatingRoutes);

module.exports = router;
