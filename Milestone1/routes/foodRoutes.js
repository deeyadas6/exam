const express = require('express');
const router = express.Router();
const foodController = require('../controllers/foodController');

router.get('/all', foodController.getAllFood);
// Add other food-related routes as needed

module.exports = router;
