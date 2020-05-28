'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const playerSchema = new Schema({
	playerId: { type: String, required: true },
	name: { type: String, required: true },
	gameId: { type: String },
	playing: { type: Boolean, required: true },
});

const Player = mongoose.model('Player', playerSchema, 'Players');

module.exports = Player;
