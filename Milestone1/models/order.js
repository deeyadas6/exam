const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
  foodId: { type: mongoose.Schema.Types.ObjectId, ref: 'Food' },
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  orderId: String,
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
  status: String,
  paymentMode: { type: String, enum: ['cash', 'card', 'upi'] },
  invoiceId: String,
  feedback: { rating: Number, image: String, textFileData: String },
  // Add other fields as needed
});

const Order = mongoose.model('Order', orderSchema);

module.exports = Order;
