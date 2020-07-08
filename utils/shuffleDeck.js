'use strict';

const Shuffle = require('shuffle');

/**
 * Shuffles the specified deck
 * @param {Object} deck
 */
const shuffleDeck = function shuffleDeck(deck) {
	return Shuffle.shuffle({ deck });
};

module.exports = {
	shuffleDeck,
};
