const mongoose = require('mongoose');

const postSchema = mongoose.Schema({
  owner: {
    name: String,
    ownerId: String,
    ownerType: String
  },
  author: {
    type: mongoose.Schema.ObjectId,
    ref: 'User'
  },
  title: {
    type: String
  },
  body: {
    type: String
  },
  created: {
    type: Date,
    default: Date.now()
  },
  replies: [
    {
      type: mongoose.Schema.ObjectId,
      ref: 'Reply'
    }
  ],
  updates: [
    {
      type: mongoose.Schema.ObjectId,
      ref: 'Update'
    }
  ]
});

module.exports = mongoose.model('Post', postSchema);
