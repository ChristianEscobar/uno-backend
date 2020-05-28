'use strict';

const routes = require('express').Router();
const deckController = require('../controllers/routes/deckController');
const gameController = require('../controllers/routes/gameController');
const playerController = require('../controllers/routes/playerController');

routes.post('/players', playerController.add_player);
routes.get('/players/playing/:playing', playerController.get_players);
routes.post('/startGame', gameController.start_game);

// routes.get('/createDeck', deckController.create_deck_get);

// routes.get('/shuffleDeck', deckController.shuffle_deck_get);

module.exports = { routes };
