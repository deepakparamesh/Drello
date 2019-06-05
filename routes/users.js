const express = require('express');
const router = express.Router();
const UserController = require('../controllers/users-controller');

router.post('/create', UserController.createUser);

module.exports = router;
