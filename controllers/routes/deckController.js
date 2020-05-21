const { shuffleDeck } = require('../../utils/shuffleDeck');
const { createDeck } = require('../../utils/createDeck');
const DeckDbController = require('../database/DeckDbController');

exports.shuffle_deck_get = async function shuffle_deck_get(req, res) {
	try {
		const shuffledDeckObj = shuffleDeck(req.body.deck);
		const { cards: shuffledDeck } = shuffledDeckObj;
		const deckController = new DeckDbController();
		await deckController.addNewShuffledDeck(shuffledDeck);
		res.status(200).json({ shuffledDeck });
	} catch (err) {
		res.status(500).json({ message: err.message });
	}
};

exports.create_deck_get = function create_deck_get(req, res) {
	try {
		const deck = createDeck();
		res.status(200).json({ deck, totalCards: deck.length });
	} catch (err) {
		res.status(500).json({ message: error.message });
	}
};
