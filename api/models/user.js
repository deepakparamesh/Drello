const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

const userSchema = mongoose.Schema({
  username: String
});

module.exports = mongoose.model('User', userSchema);