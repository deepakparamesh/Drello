const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const listSchema = new Schema({
  list_title: { type: String, required: true },
  _board: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Board' }],
  created_at: Date,
  updated_at: Date,
  order: Number
});

const List = module.exports = mongoose.model('List', listSchema);


/**
 * @function createList - creates a new List in DB
 *
 * @param {object} list
 * @param {function} callback
 */
module.exports.createList = function(list, callback) {
  List.create(list, (err, result) => {
    callback(err, result);
  });
}

/**
 * @function getAll - gets all the list according to query
 *
 * @param {object} query
 * @param {function} callback
 */
module.exports.getAll = function (query, callback) {
  List.find(query, (err, result) => {
    callback(err, result);
  });
}

/**
 * @function updateList - updates list according to query
 *
 * @param {object} query
 * @param {object} update 
 * @param {function} callback
 */
module.exports.updateList = function (query, update, callback) {
  List.update(query, update, (err, result) => {
    callback(err, result);
  });
}

/**
 * @function deleteList - deletes the list according to id
 *
 * @param {object} id
 * @param {function} callback
 */
module.exports.deleteList = function (id, callback) {
  List.remove(id, (error, result) => {
    callback(error, result);
  });
}

module.exports = List;