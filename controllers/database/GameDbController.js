'use strict';

const { uuid } = require('uuidv4');
const Game = require('../../models/Game');

class GameDbController {
	async startGame() {
		return Game.create({
			gameId: uuid(),
			startedOn: new Date().toString(),
			endedOn: null,
		});
	}
}

module.exports = GameDbController;
