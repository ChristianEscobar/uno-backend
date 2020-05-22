'use strict';

const Shuffle = require('shuffle');

const shuffleDeck = function shuffledDeck(deck) {
	return Shuffle.shuffle({ deck });
};

module.exports = {
	shuffleDeck,
};
