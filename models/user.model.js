const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  // firstName: { type: String, required: true},
  // lastName: { type: String, required: true },
  email: {
    type: String,
    required: true,
    match: /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/
  },
  password: { type: String, required: true }
});

const User = mongoose.model('User', UserSchema);

module.exports = {
  UserModel: User
}