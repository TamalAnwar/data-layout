const mongoose = require('mongoose');

const updateSchema = mongoose.Schema({
  title: {
    type: String
  },
  body: {
    type: String
  },
  created: {
    type: Date,
    default: Date.now()
  }
});

module.exports = mongoose.model('Update', updateSchema);
