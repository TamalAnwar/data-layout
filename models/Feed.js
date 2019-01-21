const mongoose = require('mongoose');

/**
 * A new item has been created, with a short line
 * and optional content and link to that update
 */

const feedSchema = mongoose.Schema({
  owner: {
    name: String,
    ownerId: String,
    ownerType: String
  },
  feedType: {
    type: String
  },
  created: {
    type: Date,
    default: Date.now()
  },
  summary: {
    type: String
  },
  content: {
    type: String
  },
  link: {
    type: String
  }
});

module.exports = mongoose.model('Feed', feedSchema);
