const mongoose = require('mongoose');

const orgSchema = mongoose.Schema({
  name: {
    type: String
  },
  created: {
    type: Date,
    default: Date.now()
  },
  profilePicture: {
    type: String
  },
  bio: {
    type: String
  },
  location: {
    type: String
  },
  members: [
    {
      memberId: {
        type: mongoose.Schema.ObjectId,
        ref: 'User'
      },
      role: {
        type: Number,
        default: 0
      }
    }
  ],
  admins: [
    {
      memberId: {
        type: mongoose.Schema.ObjectId,
        ref: 'User'
      },
      role: {
        type: Number,
        default: 1
      }
    }
  ],
  groups: [
    {
      type: mongoose.Schema.ObjectId,
      ref: 'Group'
    }
  ],
  followers: [
    {
      type: mongoose.Schema.ObjectId,
      ref: 'User'
    }
  ],
  timelines: [
    {
      type: mongoose.Schema.ObjectId,
      ref: 'Timeline'
    }
  ],
  accessLevel: {
    type: String,
    default: 'Public'
  },
  feed: {
    type: mongoose.Schema.ObjectId,
    ref: 'Feed'
  },
  settings: {
    type: Object
  }
});

module.exports = mongoose.model('Organization', orgSchema);
