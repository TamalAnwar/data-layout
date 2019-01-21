const mongoose = require('mongoose');

const replySchema = mongoose.Schema({
  created: {
    type: Date,
    default: Date.now()
  },
  body: {
    type: String
  },
  author: {
    type: mongoose.Schema.ObjectId,
    ref: 'User'
  }
});

module.exports = mongoose.model('Reply', replySchema);
