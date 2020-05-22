'use strict';
const DeckDbController = require('../controllers/database/DeckDbController');
const { createDeck } = require('./createDeck');

exports.createDeck = async function createDeck(mongooseCon) {
	try {
		await mongooseCon.dropCollection('Deck');
		const deck = createDeck();
		const deckDbController = new DeckDbController();
		await deckDbController.addDeck(deck);
	} catch (error) {
		throw new Error(`Initialization error encountered: ${error.message}`);
	}
};
