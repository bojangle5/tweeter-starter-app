const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const userSchema = new Schema({

  username: {
    type: String,
    required: true
  },

  password: {
    type: String,
    required: true
  },

  avatarUrl: {
    type: String,
    required: false
  },

  bio: {
    type: String,
    required: false
  },

  tweets: Array,
    required: false
});

userSchema.set('toJSON', {
  transform: function(doc, ret, options) {
    delete ret.password;
    return ret;
  }
});

module.exports = mongoose.model('User', userSchema);
