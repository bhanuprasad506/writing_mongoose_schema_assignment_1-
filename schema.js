// schema.js

const mongoose = require('mongoose');

// Profile sub-schema
const profileSchema = new mongoose.Schema({
  firstName: {
    type: String
  },
  lastName: {
    type: String
  },
  age: {
    type: Number
  }
});

// Main user schema
const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
    trim: true
  },
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    trim: true
  },
  password: {
    type: String,
    required: true
  },
  roles: {
    type: [String],
    default: ['user']
  },
  profile: profileSchema,
  lastLogin: {
    type: Date
  }
}, {
  timestamps: true
});

const User = mongoose.model('User', userSchema);

module.exports = User;
