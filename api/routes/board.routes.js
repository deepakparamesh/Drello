const express = require('express');
const router = express.Router();
const boardController = require('../controller/board.controller');

router.post('/', boardController.createBoard);

router.get('/:name', boardController.getBoards);

router.get('/:id', boardController.getBoardById);

router.put('/:id', boardController.editBoard);

router.delete('/:id', boardController.deleteBoard);

router.get('/:id/columns', boardController.getBoardLists);

router.get('/:id/cards', boardController.getBoardCards);

module.exports = router;