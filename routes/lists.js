const express = require('express');
const router = express.Router();
const ListController = require('../controllers/lists-controller');

router.post('/create', ListController.createList);

router.post('/get', ListController.getLists);

router.post('/edit/:list_id', ListController.editList);

router.post('/delete/:list_id', ListController.deleteList);

module.exports = router;