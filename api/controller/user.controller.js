var _ = require('lodash');
var User = require('../models/user.js');
var Board = require('../models/board.js');
var Card = require('../models/card.js');
var Column = require('../models/column.js');
var log = require('../../dev-logger.js');


exports.findOrCreateUser = (req, res) => {
  User.find({"username": req.body.username}, (err, user) => {
    log('POST /user/', req.body.username);
    if (err) {
      res.json({info:'error during find board', error: err})
    };
    if (user.length) {
      res.json({info: 'user found successfully', data: user});
    } else {
      var newUser = new User(req.body);
      newUser.save((err, user) => {
        if(err) {
          res.json({ info: 'error during user create', error: err });
        } else {
          res.json({ info: 'user created successfully', data: user });
        }
      });
    }
  });
}

