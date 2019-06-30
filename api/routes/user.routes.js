const express = require('express');
const router = express.Router();
const userController = require('../controller/user.controller');

router.post('/', userController.findOrCreateUser);

// router.post('/create', userController.createUser);

module.exports = router;
