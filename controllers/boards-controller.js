const Board = require('../models/board');
const User = require('../models/user');

// Create a new Board
exports.createBoard = function (req, res) {
  var board = new Board({
    title: req.body.title,
    _user: req.body.userId
  });
  board.save(function (error, board) {
    if (board) {
      Board.find({ _user: req.body.userId }, function (error, boards) {
        if (boards) {
          res.json(boards);
        }
        else if(error){
          console.error('Failed to save' + error.stack);
        }
      });
    }
  });
}


exports.getBoards = function (req, res) {
  Board.find({
    _user: req.body.username
  }, function (error, boards) {
    if (boards) {
      res.json(boards);
    } else if (error) {
      console.log("errorrrrrr" + error.stack);
    }
  });
}


//POST | updates board by board id
exports.editBoard = function (req, res) {
  var board = { _id: req.params.board_id };
  Board.update(board, { title: req.body.title }, function (error, board) {
    if (board) {
      Board.find({}, function (error, board) {
        res.json(board);
      })
    } else if (error) {
      console.log(error.stack);
      res.redirect('/error');
    }
  })
}

//POST | deletes board by board id
exports.deleteBoard = function (req, res) {
  var board = new Board({ _id: req.params.board_id });
  board.remove(function (error, board) {
    console.log(board);
    if (board) {
      Board.find({ _id: req.params.board_id }, function (error, boards) {
        if (boards) {
          res.json(boards);
        }
        else if (error) throw error;
      });
    }
    else if (error) {
      console.error('Failed to save' + error.stack);
    }
  })
}