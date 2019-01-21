const mongoose = require('mongoose');

const groupSchema = mongoose.Schema({
  name: {
    type: String
  },
  parentOrg: {
    parentOrgName: String,
    parentOrgId: String
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
  accessLevel: {
    // Public, Private, Org Private
    type: String,
    accessLevel: 'public'
  },
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
  feed: {
    type: mongoose.Schema.ObjectId,
    ref: 'Feed'
  },
  settings: {
    type: Object
  }
});

module.exports = mongoose.model('Group', groupSchema);
