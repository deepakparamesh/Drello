const listModel = require('../models/list');

/**
 * @function createList - API/fn used to create a new List .
 *
 * @param {HTTPRequest} req  - sends list object as request.
 * @param {HTTPResponse} res - responses true if the saved successfully.
 */
exports.createList = function(req, res) {
  const list = {
    list_title: req.body.list_title,
    _board: req.body.board_id 
  }
  listModel.createList(list, (err, result) => {
    if (err) {
      return res.json({ success: false, msg: 'Failed to create a List', error: err });
    } else {
      return res.json({ success: true, msg: 'Successfully create a List', result: result });
    }
  })
}

/**
 * @function getList - API/fn used to get all the list accoding to query.
 *
 * @param {HTTPRequest} req  - sends query object as request/query
 * @param {HTTPResponse} res - responses true if the fetched successfully.
 */
exports.getLists = function (req, res) {
  const query = { _board: req.body.board_id }
  listModel.getAll(query, (err, result) => {
    if (err) {
      return res.json({ success: false, message: 'Error in finding List', error: err });
    } else {
      return res.json({ success: true, message: 'Successfully found List', result: result });
    }
  });
}

/**
 * @function editList - API/fn used to update the list.
 *
 * @param {HTTPRequest} req  - sends list and update object as request/query.
 * @param {HTTPResponse} res - responses true if the saved successfully.
 */
exports.editList = function (req, res) {
  const list = { _id: req.params.list_id };
  const update = { list_title: req.body.list_title };
  listModel.update(list, update, (error, result) => {
    if (error) {
      return res.json({ success: false, message: 'Error in updating List', error: err });
    } else {
      return res.json({ success: true, message: 'Successfully updated List', result: result });
    }
  })
}


/**
 * @function deleteList - API/fn used to delete the list.
 *
 * @param {HTTPRequest} req  - sends id object as query.
 * @param {HTTPResponse} res - responses true if the saved successfully.
 */
exports.deleteList = function (req, res) {
  const listId = { _id: req.params.list_id };
  listModel.remove(listId, (err, result) => {
    if (err) {
      return res.json({ success: false, message: 'Error in deleting List', error: err });
    } else {
      return res.json({ success: true, message: 'Successfully deleted List', result: result });
    }
  })
}