const express = require('express');
const router = express.Router();
const BoardController = require('../controllers/boards-controller');

router.post('/create', BoardController.createBoard);

router.get('/get', BoardController.getBoards);

router.post('/edit/:board_id', BoardController.editBoard);

router.post('/delete/:board_id', BoardController.deleteBoard);

module.exports = router;