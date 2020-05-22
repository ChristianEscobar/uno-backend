'use strict';

const GameDbController = require('../database/GameDbController');

exports.start_game = async function start_game(req, res) {
	try {
		const gameDbController = new GameDbController();
		const result = await gameDbController.startGame();
		res.status(200).json(result);
	} catch (err) {
		res.status(500).json({ message: err.message });
	}
};
