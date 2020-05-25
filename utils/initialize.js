'use strict';
const DeckDbController = require('../controllers/database/DeckDbController');
const { createDeck } = require('./createDeck');

exports.populateDeck = async function populateDeck() {
	try {
		const deckDbController = new DeckDbController();
		await deckDbController.deleteDeck();
		const newDeck = createDeck();
		await deckDbController.addDeck(newDeck);
	} catch (error) {
		throw new Error(`Initialization error encountered: ${error.message}`);
	}
};
