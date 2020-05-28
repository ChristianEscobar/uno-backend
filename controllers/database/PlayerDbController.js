'use strict';

const { uuid } = require('uuidv4');
const Player = require('../../models/Player');

class PlayerDbController {
	async addPlayer(name) {
		return Player.create({
			name,
			playerId: uuid(),
			gameId: null,
			playing: false,
		});
	}

	async availablePlayers(playing) {
		return Player.find({ playing });
	}
}

module.exports = PlayerDbController;
