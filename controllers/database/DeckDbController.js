'use strict';

const Deck = require('../../models/Deck');

class DeckDbController {
	async addDeck(deck) {
		try {
			await Deck.insertMany(deck);
		} catch (err) {
			throw new Error(`Error encountered on insert: ${err.message}`);
		}
	}

	async deleteDeck() {
		try {
			await Deck.deleteMany({});
		} catch (err) {
			throw new Error(`Error encountered on delete: ${err.message}`);
		}
	}
}

module.exports = DeckDbController;
