'use strict';

const { shuffleDeck } = require('../../utils/shuffleDeck');
const ShuffledDeckDbController = require('../database/ShuffledDeckDbController');

exports.shuffle_deck_get = async function shuffle_deck_get(req, res) {
	try {
		const shuffledDeckObj = shuffleDeck(req.body.deck);
		const { cards: shuffledDeck } = shuffledDeckObj;
		const shuffledDeckController = new ShuffledDeckDbController();
		await shuffledDeckController.addShuffledDeck(shuffledDeck);
		res.status(200).json({ shuffledDeck });
	} catch (err) {
		res.status(500).json({ message: err.message });
	}
};
