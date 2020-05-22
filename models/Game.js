'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const gameSchema = new Schema({
	gameId: { type: String, required: true },
	startedOn: { type: Date, required: true },
	endedOn: { type: Date },
});

const Game = mongoose.model('Game', gameSchema);

module.exports = Game;
