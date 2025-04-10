const mongoose = require('mongoose');
const User = require('./schema'); // Import your schema

mongoose.connect('mongodb://127.0.0.1:27017/user_management')
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error('MongoDB connection error:', err));

async function createSampleUser() {
  try {
    const existingUser = await User.findOne({ username: 'john_doe' });

    if (existingUser) {
      console.log('User already exists:', existingUser.username);
    } else {
      const newUser = new User({
        username: 'john_doe',
        email: 'john@example.com',
        password: 'securepassword',
        roles: ['admin'],
        profile: {
          firstName: 'John',
          lastName: 'Doe',
          age: 28
        },
        lastLogin: new Date()
      });

      const result = await newUser.save();
      console.log('User created:', result);
    }
  } catch (error) {
    console.error('Error creating user:', error.message);
  }
}

createSampleUser();
