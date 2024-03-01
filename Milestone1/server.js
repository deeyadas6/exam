const express = require('express');
const mongoose = require('mongoose');
const passport = require('passport');
const session = require('express-session');
const authRoutes = require('./routes/authRoutes');
const foodRoutes = require('./routes/foodRoutes');
const orderRoutes = require('./routes/orderRoutes');

const app = express();

// MongoDB Connection
mongoose.connect('mongodb://localhost:27017/your-database-name', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Middleware
app.use(express.json());
app.use(session({ secret: 'your-secret-key', resave: true, saveUninitialized: true }));
app.use(passport.initialize());
app.use(passport.session());

// Passport Configuration (OAuth with Google example)
require('./config/passport-setup.js');

// Routes
app.use('/auth', authRoutes);
app.use('/food', foodRoutes);
app.use('/order', orderRoutes);

// Server Listening
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
