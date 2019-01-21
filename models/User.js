const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
  username: {
    type: String
  },
  joined: {
    type: Date,
    default: Date.now()
  },
  profilePicture: {
    type: String
  },
  occupation: {
    type: String
  },
  location: {
    type: String
  },
  organizations: [
    {
      type: mongoose.Schema.ObjectId,
      ref: 'Organization'
    }
  ],
  groups: [
    {
      type: mongoose.Schema.ObjectId,
      ref: 'Group'
    }
  ],
  following: [
    {
      entityType: String,
      entityId: String
    }
  ],
  followers: {
    entityType: String,
    entityId: String
  },
  timelines: [
    {
      timelineId: {
        type: mongoose.Schema.ObjectId,
        ref: 'Timeline'
      },
      role: String
    }
  ],
  settings: {
    type: Object
  },
  feed: {
    type: mongoose.Schema.ObjectId,
    ref: 'Feed'
  }
});

module.exports = mongoose.model('User', userSchema);
