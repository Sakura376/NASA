// routes/orderDetailRoutes.js

const express = require('express');
const router = express.Router();
const orderDetailController = require('../controllers/orderDetailsController');

// Rutas para los detalles de órdenes
router.get('/', orderDetailController.getAllOrderDetails);
router.get('/:id', orderDetailController.getOrderDetailById);
router.post('/create', orderDetailController.createOrderDetail);
router.put('/:id', orderDetailController.updateOrderDetail);
router.delete('/cart/:userId/:productId', orderDetailController.deleteOrderDetail);


module.exports = router;
