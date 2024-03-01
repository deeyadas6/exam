const express = require('express');
const router = express.Router();
const orderController = require('../controllers/orderController');

router.post('/place', orderController.placeOrder);
// Add other order-related routes as needed

module.exports = router;
