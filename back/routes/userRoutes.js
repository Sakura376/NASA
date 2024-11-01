// routes/productRoutes.js

const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

// Rutas de user
router.get('/', userController.getAllUsers);
router.get('/:id', userController.getUserById);
router.post('/', userController.createUser);
router.put('/:id', userController.createUser);
router.delete('/:id', userController.deleteUser);

module.exports = router;
