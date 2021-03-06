'use strict';

const routes = require('express').Router();
const gameController = require('../controllers/routes/gameController');
const playerController = require('../controllers/routes/playerController');

routes.post('/players', playerController.add_player);
routes.get('/players/playing/:playing', playerController.players_get);
routes.post('/startGame', gameController.start_game);

// routes.get('/createDeck', deckController.create_deck_get);

// routes.get('/shuffleDeck', deckController.shuffle_deck_get);

module.exports = { routes };
