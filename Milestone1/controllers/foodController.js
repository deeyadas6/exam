const Food = require('./models/food');

exports.getAllFood = async (req, res) => {
  try {
    const foods = await Food.find();
    res.json(foods);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
// Add other food-related controller functions as needed
