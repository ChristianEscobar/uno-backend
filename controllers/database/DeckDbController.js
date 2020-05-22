'use strict';

const Deck = require('../../models/Deck');

class DeckDbController {
	async addDeck(deck) {
		return Deck.insertMany(deck);
	}
}

module.exports = DeckDbController;
