const routes = require('express').Router();
const { createDeck } = require('./utils/createDeck');
const { shuffleDeck } = require('./utils/shuffleDeck');

routes.get('/ping', (req, res) => {
	res.status(200).json({ message: 'Pong! Application is up and running' });
});

routes.get('/createDeck', (req, res) => {
	const deck = createDeck();
	res.status(200).json({ deck, totalCards: deck.length });
});

routes.get('/shuffleDeck', (req, res) => {
	const shuffledDeckObj = shuffleDeck(req.body.deck);
	const { cards: shuffledDeck } = shuffledDeckObj;
	res.status(200).json({ shuffledDeck });
});

module.exports = { routes };
