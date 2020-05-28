'use strict';

const PlayerDbController = require('../database/PlayerDbController');

exports.add_player = async function add_player(req, res) {
	try {
		const playerName = req.body.name;
		const playerDbController = new PlayerDbController();
		const result = await playerDbController.addPlayer(playerName);
		res.status(200).json(result);
	} catch (err) {
		res.status(500).json({ message: err.message });
	}
};

exports.get_players = async function get_players(req, res) {
	try {
		const playerDbController = new PlayerDbController();
		const result = await playerDbController.availablePlayers(
			req.params.playing
		);
		res.status(200).json(result);
	} catch (err) {
		res.status(500).json({ message: err.message });
	}
};
