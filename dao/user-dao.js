const User = require('../models/user');
const bcrypt = require('bcryptjs');

async function createUser(userData) {
  const { email, password, name } = userData;
  const hashedPassword = await bcrypt.hash(password, 10);
  return User.create({ email, password: hashedPassword, name });
}

function findByEmail(email) {
  return User.findOne({ email });
}

function findById(userId) {
    return User.findById(userId);
}
  
  
module.exports = {
  createUser,
  findByEmail,
  findById
};
