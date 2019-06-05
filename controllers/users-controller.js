const User = require('../models/user');

exports.createUser = function (req, res) {
  
  const user = new User({
    username: req.body.username
  });
  const userObj = { username: req.body.username };
    User.find(userObj, (error, result) => {
      if(result.length === 0) {
        user.save((error, saved) => {
          res.json(saved)
        });
      } else {
          res.json(result)
      }
    });

}

