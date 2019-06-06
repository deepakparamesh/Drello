const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const boardSchema = new Schema({
  title: {type: String, required: true},
  created_at: Date,
  updated_at: Date,
  _user: { type: String, ref: 'User' },
  _lists: [{type: mongoose.Schema.Types.ObjectId, ref: 'List', required: true}]
})

const Board = module.exports = mongoose.model('Board', boardSchema);

/**
 * @function createBoard - creates a new Board in DB
 *
 * @param {object} board
 * @param {function} callback
 */
module.exports.createBoard = function(board, callback) {
  Board.create(board, (err, result) => {
      callback(err, result);
  });
}

/**
 * @function getAll - gets all the board according to query
 *
 * @param {object} query
 * @param {function} callback
 */
module.exports.getAll = function(query, callback) {
  Board.find(query, (err, result) => {
    callback(err, result);
  });
}

/**
 * @function getById - gets the board according to query
 *
 * @param {object} query
 * @param {function} callback
 */
module.exports.getById = (query, callback) => {
  Board.findById(query, (err, result) => {
    callback(err, result)
  });
}

/**
 * @function updateBoard - updates board according to query
 *
 * @param {object} query
 * @param {object} update 
 * @param {function} callback
 */
module.exports.updateBoard = function(query, update, callback) {
  Board.update(query, update, (err, result) => {
    callback(err, result);
  });
}

/**
 * @function deleteBoard - deletes the board according to id
 *
 * @param {object} id
 * @param {function} callback
 */
module.exports.deleteBoard = function(id, callback) {
  Board.remove(id, (error, result) => {
    callback(error, result);
  });
}

module.exports = Board;