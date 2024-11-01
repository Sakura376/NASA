// routes/productRatingRoutes.js

const express = require('express');
const router = express.Router();
const productRatingController = require('../controllers/productRatingController');

// Rutas para calificaciones
router.get('/', productRatingController.getAllRatings);
router.post('/', productRatingController.createRating);
// Puedes añadir más rutas como update, delete, etc.

module.exports = router;
