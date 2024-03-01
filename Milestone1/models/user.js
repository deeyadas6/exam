const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  email: String,
  name: String,
  role: { type: String, enum: ['admin', 'superuser', 'user'], default: 'user' },
  // Add other fields as needed
});

const User = mongoose.model('User', userSchema);

module.exports = User;
