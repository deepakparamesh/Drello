const express = require('express');
const router = express.Router();
const columnController = require('../controller/column.controller');


router.post('/', columnController.createColumn);

router.get('/', columnController.getColumns);

router.get('/:id', columnController.getColumnById);

router.get('/:id/cards', columnController.getColumnsCard);

router.put('/:id', columnController.editColumn);

router.delete('/:id', columnController.deleteColumn);

module.exports = router;
