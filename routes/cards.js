const express = require('express');
const router = express.Router();
const CardController = require('../controllers/card-controller');

router.post('/create', CardController.createCard);

router.post('/get', CardController.getCards);

router.post('/edit/:card_id', CardController.editCard);

router.post('/delete/:card_id', CardController.deleteCard);

module.exports = router;