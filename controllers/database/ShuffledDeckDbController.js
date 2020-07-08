'use strict';

const ShuffledDeck = require('../../models/ShuffledDeck');

class ShuffledDeckDbController {
	async addShuffledDeck(shuffledDeck) {
		return ShuffledDeck.insertMany(shuffledDeck);
	}
}

module.exports = ShuffledDeckDbController;
