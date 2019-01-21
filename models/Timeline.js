const mongoose = require('mongoose');

const timelineSchema = mongoose.Schema({
  name: {
    type: String
  },
  collaborators: [
    {
      type: mongoose.Schema.ObjectId,
      ref: 'User'
    }
  ],
  owner: {
    name: String,
    ownerId: String,
    owenerType: String
  },
  author: [
    {
      type: mongoose.Schema.ObjectId,
      ref: 'User'
    }
  ],
  created: {
    type: Date,
    default: Date.now()
  },
  lastUpdated: {
    type: Date
  },
  posts: [
    {
      type: mongoose.Schema.ObjectId,
      ref: 'Post'
    }
  ]
});

module.exports = mongoose.model('Timeline', timelineSchema);
