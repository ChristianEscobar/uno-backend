'use strict';

const ShuffledDeck = require('../../models/ShuffledDeck');

class ShuffledDeckDbController {
	async addShuffledDeck(shuffledDeck) {
		return Deck.insertMany(shuffledDeck);
	}
}

module.exports = ShuffledDeckDbController;
