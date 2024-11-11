// routes/productRatingRoutes.js

const express = require('express');
const router = express.Router();
const productRatingController = require('../controllers/productRatingController');

// Rutas para calificaciones
router.get('/', productRatingController.getAllRatings);
router.post('/create', productRatingController.createRating);
router.get('/ratings/user/:userId', productRatingController.getRatedProductsByUser);
router.post('/ratings/user/:userId/product/:productId', productRatingController.getUserRatingForProduct);
router.delete('/cart/:userId/:productId', productRatingController.deleteOrderDetail);

// Puedes añadir más rutas como update, delete, etc.

module.exports = router;
