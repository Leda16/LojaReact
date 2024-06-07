const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
  image: { type: String, required: true },
  category: { type: String, required: true },
  name: { type: String, required: true },
  info: { type: String, required: true },
  rating: { type: Number, required: true },
  price: { type: Number, required: true },
  stock: { type: Number, required: true },
  imageExtra: { type: String },
});

module.exports = mongoose.model('Product', ProductSchema);
