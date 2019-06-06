const express = require('express');
const router = express.Router();
const BoardController = require('../controllers/boards-controller');

router.post('/create', BoardController.createBoard);

router.post('/get', BoardController.getBoards);

router.get('/get/:id', BoardController.getBoardById);

// router.get('/:id/list', BoardController.getBoardList);

// router.get('/:id/cards', BoardController.getBoardCard);

router.put('/edit/:board_id', BoardController.editBoard);

router.post('/delete/:board_id', BoardController.deleteBoard);

module.exports = router;