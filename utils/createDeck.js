'use strict';

const colors = ['red', 'yellow', 'green', 'blue'];
const values = [
	'0',
	'1',
	'1',
	'2',
	'2',
	'3',
	'3',
	'4',
	'4',
	'5',
	'5',
	'6',
	'6',
	'7',
	'7',
	'8',
	'8',
	'9',
	'9',
	'SKIP',
	'SKIP',
	'REVERSE',
	'REVERSE',
	'DRAW_TWO',
	'DRAW_TWO',
	'WILD',
	'WILD_DRAW_FOUR',
];

const createDeck = function createDeck() {
	const deck = [];
	let cardCounter = 0;

	colors.forEach((color) => {
		values.forEach((value) => {
			cardCounter++;
			deck.push(createCard(cardCounter, color, value));
		});
	});

	return deck;
};

const createCard = function createCard(seqNum, color, value) {
	return {
		seqNum,
		color,
		value,
	};
};

module.exports = {
	createDeck,
};
