const mongoose = require('mongoose');

const foodSchema = new mongoose.Schema({
  name: String,
  description: String,
  price: Number,
  image: String,
  category: { type: String, enum: ['veg', 'non-veg', 'dessert'] },
  // Add other fields as needed
});

const Food = mongoose.model('Food', foodSchema);

module.exports = Food;
