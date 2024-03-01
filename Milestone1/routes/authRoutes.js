const express = require('express');
const passport = require('passport');
const router = express.Router();
const authController = require('../controllers/authController');

router.get('/google', authController.authenticate);
router.get('/google/callback', authController.callback);
router.get('/logout', authController.logout);

module.exports = router;
