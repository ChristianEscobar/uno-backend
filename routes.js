const routes = require('express').Router();
const deckController = require('./controllers/routes/deckController');

// Add route controllers
routes.get('/ping', (req, res) => {
	res.status(200).json({ message: 'Pong! Application is up and running' });
});

routes.get('/createDeck', deckController.create_deck_get);

routes.get('/shuffleDeck', deckController.shuffle_deck_get);

module.exports = { routes };
