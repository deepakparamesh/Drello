const userModel = require('../models/user');

/**
 * @function createUser - API/fn used to register a new user or finds an existing user.
 *
 * @param {HTTPRequest} req  - sends userObj object as request/query
 * @param {HTTPResponse} res - responses true if the saved successfully.
 */
exports.createUser = function (req, res) {
  const userObj = { 
    username: req.body.username,
  };
  userModel.findUser(userObj, (err, result) => {
    if(err) {
      return res.json({success: false, message: 'Error in finding user', error: err});
    } else {
      if(!result.length) {
        userModel.createUser(userObj, (err, createResult) => {
          if(err) {
            return res.json({ success: false, message: 'Error in creating user', error: err });
          } else {
            return res.json({ success: true, message: 'Successfully Created new user', result: createResult});
          }
        });
      } else {
        return res.json({success: true, message: 'Successfully found user', result: result});
      }
    }
  });

}

