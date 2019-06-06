const cardModel = require('../models/card');

/**
 * @function createCard - API/fn used to create a new Card .
 *
 * @param {HTTPRequest} req  - sends card object as request.
 * @param {HTTPResponse} res - responses true if the saved successfully.
 */
exports.createCard = function (req, res) {
  const card = {
    card_title: req.body.card_title,
    _list: req.body.list_id
  }
  cardModel.createCard(card, (err, result) => {
    if (err) {
      return res.json({ success: false, msg: 'Failed to create a card', error: err });
    } else {
      return res.json({ success: true, msg: 'Successfully create a card', result: result });
    }
  })
}

/**
 * @function getCard - API/fn used to get all the card accoding to query.
 *
 * @param {HTTPRequest} req  - sends query object as request/query
 * @param {HTTPResponse} res - responses true if the fetched successfully.
 */
exports.getCards = function (req, res) {
  const query = { _list: req.body.list_id }
  cardModel.getAll(query, (err, result) => {
    if (err) {
      return res.json({ success: false, message: 'Error in finding card', error: err });
    } else {
      return res.json({ success: true, message: 'Successfully found card', result: result });
    }
  });
}

/**
 * @function editCard - API/fn used to update the list.
 *
 * @param {HTTPRequest} req  - sends card and update object as request/query.
 * @param {HTTPResponse} res - responses true if the saved successfully.
 */
exports.editCard = function (req, res) {
  const card = { _id: req.params.card_id };
  const update = { card_title: req.body.card_title };
  cardModel.update(card, update, (error, result) => {
    if (error) {
      return res.json({ success: false, message: 'Error in updating card', error: err });
    } else {
      return res.json({ success: true, message: 'Successfully updated card', result: result });
    }
  })
}


/**
 * @function deleteCard - API/fn used to delete the card.
 *
 * @param {HTTPRequest} req  - sends id object as query.
 * @param {HTTPResponse} res - responses true if the saved successfully.
 */
exports.deleteCard = function (req, res) {
  const cardId = { _id: req.params.card_id };
  cardModel.remove(cardId, (err, result) => {
    if (err) {
      return res.json({ success: false, message: 'Error in deleting Card', error: err });
    } else {
      return res.json({ success: true, message: 'Successfully deleted Card', result: result });
    }
  })
}