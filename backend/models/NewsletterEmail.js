const mongoose = require('mongoose');

const EmailSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true
  },
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.models.Email || mongoose.model('Email', EmailSchema);
