const boardModel = require('../models/board');

/**
 * @function createBoard - API/fn used to create a new Board .
 *
 * @param {HTTPRequest} req  - sends board object as request.
 * @param {HTTPResponse} res - responses true if the saved successfully.
 */
exports.createBoard = function (req, res) {
  const board = {
    title: req.body.title,
    _user: req.body._user
  }
  boardModel.createBoard(board, (err, result) => {
    if(err) {
      return res.json({success: false, msg: 'Failed to create a Board' , error: err});
    } else {
      return res.json({success: true, msg: 'Successfully create a Board', result: result});
    }
  })
}

/**
 * @function getBoards - API/fn used to get all the board accoding to query.
 *
 * @param {HTTPRequest} req  - sends query object as request/query
 * @param {HTTPResponse} res - responses true if the fetched successfully.
 */
exports.getBoards = function (req, res) {
  const query = { _user : req.body.username }
  boardModel.getAll(query, (err, result) => {
    if(err) {
      return res.json({ success: false, message: 'Error in finding Boards', error: err });
    } else {
      return res.json({ success: true, message: 'Successfully found Boards', result: result });
    }
  });
}

/**
 * @function editBoard - API/fn used to update the board.
 *
 * @param {HTTPRequest} req  - sends board and update object as request/query.
 * @param {HTTPResponse} res - responses true if the saved successfully.
 */
exports.editBoard = function (req, res) {
  const board = { _id: req.params.board_id };
  const update = { title: req.body.title };
  boardModel.update(board, update, (error , result) => {
    if(error) {
      return res.json({ success: false, message: 'Error in updating Boards', error: err });
    } else {
      return res.json({ success: true, message: 'Successfully updated Board', result: result });
    }
  })
}


/**
 * @function deleteBoard - API/fn used to delete the board.
 *
 * @param {HTTPRequest} req  - sends id object as query.
 * @param {HTTPResponse} res - responses true if the saved successfully.
 */
exports.deleteBoard = function (req, res) {
  const boardId = { _id: req.params.board_id };
  boardModel.remove(boardId, (err, result) => {
    if (err) {
      return res.json({ success: false, message: 'Error in deleting Boards', error: err });
    } else {
      return res.json({ success: true, message: 'Successfully deleted Board', result: result });
    }
  })
}