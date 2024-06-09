const mongoose = require('mongoose');

const ClientSchema = new mongoose.Schema({
  cpf: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  name: { type: String, required: true },
  birthDate: { type: String, required: true }
});

module.exports = mongoose.model('Client', ClientSchema);
