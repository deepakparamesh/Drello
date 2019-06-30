const express = require('express');
const router = express.Router();
const cardController = require('../controller/card.controller');


router.post('/', cardController.createCard);

router.get('/', cardController.getCards);

router.get('/:id', cardController.getCardById);

// router.get('/:id/cards', cardController.);

router.put('/:id', cardController.editCard);

router.delete('/:id', cardController.deleteCard);

module.exports = router;

