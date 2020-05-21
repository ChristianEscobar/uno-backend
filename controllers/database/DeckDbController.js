const Deck = require('../../models/Deck');

class DeckController {
	async addNewShuffledDeck(shuffledDeck) {
		return Deck.insertMany(shuffledDeck);
	}
}

module.exports = DeckController;
