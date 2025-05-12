const mongoose = require('mongoose');

const reminderSchema = new mongoose.Schema({
  date: {
    type: Date,
    required: true,
  },
  time: {
    type: String,
    required: true,
  },
  message: {
    type: String,
    required: true,
  },
  reminderType: {
    type: String,
    enum: ["sms", "email"],
    required: true,
  },
},{timestamp: true});

module.exports = mongoose.model('Reminder', reminderSchema);