const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const cardSchema = new Schema({
  card_title: { type: String, required: true },
  _list: [{ type: mongoose.Schema.Types.ObjectId, ref: 'List' }],
  created_at: Date,
  updated_at: Date,
});

const Card = module.exports = mongoose.model('Card', cardSchema);


/**
 * @function createCard - creates a new Card in DB
 *
 * @param {object} card
 * @param {function} callback
 */
module.exports.createCard = function (card, callback) {
  Card.create(card, (err, result) => {
    callback(err, result);
  });
}

/**
 * @function getAll - gets all the card according to query
 *
 * @param {object} query
 * @param {function} callback
 */
module.exports.getAll = function (query, callback) {
  Card.find(query, (err, result) => {
    callback(err, result);
  });
}

/**
 * @function updateCard - updates card according to query
 *
 * @param {object} query
 * @param {object} update 
 * @param {function} callback
 */
module.exports.updateCard = function (query, update, callback) {
  Card.update(query, update, (err, result) => {
    callback(err, result);
  });
}

/**
 * @function deleteCard - deletes the card according to id
 *
 * @param {object} id
 * @param {function} callback
 */
module.exports.deleteCard = function (id, callback) {
  Card.remove(id, (error, result) => {
    callback(error, result);
  });
}

module.exports = Card;