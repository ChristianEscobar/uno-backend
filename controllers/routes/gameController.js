'use strict';

const GameDbController = require('../database/GameDbController');
const ShuffledDeckDbController = require('../database/ShuffledDeckDbController');
const DeckDbController = require('../database/DeckDbController');
const { shuffleDeck } = require('../../utils/shuffleDeck');

exports.start_game = async function start_game(req, res) {
	try {
		// Check if there are 2 players
		const playerIds = req.body.players;
		if (!playerIds) {
			res.status(400).json({ message: 'No players specified' });
		} else if (playerIds.length <= 1) {
			res.status(400).json({ message: 'Not enough players' });
		} else {
			// game can start
			await startNewGame();
		}
		// const gameDbController = new GameDbController();
		// const result = await gameDbController.startGame();
		// res.status(200).json(result);
	} catch (err) {
		res.status(500).json({ message: err.message });
	}
};

const startNewGame = async function startNewGame() {
	try {
		const gameDbController = new GameDbController();
		const gameDetails = await gameDbController.startGame();
		// 1. get cards in deck
		// 2. shuffle cards in deck
		// 3. assign game id to shuffled cards
		// 4. store shuffled cards in database
		const deckDbController = new DeckDbController();
		const deck = await deckDbController.getDeck();
		console.log(deck);
		for (let card of deck) {
			console.log(`-> ${card}`);
			card[gameId] = 'yes';
			console.log(`--> ${card}`);
		}

		// const shuffledDeck = shuffleDeck(deck);
		// for (const card of shuffledDeck.cards) {
		// 	card['gameId'] = gameDetails.gameId;
		// }
		// console.log(shuffledDeck.cards);
	} catch (err) {
		throw new Error(`Error encountered during game setup: ${err.message}`);
	}
};
