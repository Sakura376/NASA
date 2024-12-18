// routes/orderRoutes.js

const express = require('express');
const router = express.Router();
const orderController = require('../controllers/orderFinalController');

// Rutas para órdenes
router.get('/', orderController.getAllOrders);
router.get('/:id', orderController.getOrderById);
router.post("/create", orderController.createOrder);
router.put('/:id', orderController.updateOrder);
router.delete('/:id', orderController.deleteOrder);

module.exports = router;
