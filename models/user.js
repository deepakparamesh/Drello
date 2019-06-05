const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
  username: { type: String, required: true, unique: true},
  created_at: Date,
  updated_at: Date,
});

const User = module.exports = mongoose.model('User', userSchema);

/**
 * @function createUseer - creates a new user in DB
 *
 * @param {object} user
 * @param {function} callback
 */
module.exports.createUser = function(user, callback) {
  User.create(user, (err, result) => {
    callback(err, result)
  })
}


/**
 * @function findUser - finds an user from DB
 *
 * @param {object} user
 * @param {function} callback
 */
module.exports.findUser = function(user, callback) {
  User.find(user, (err, result) => {
    callback(err, result);
  });
}

module.exports = User;
