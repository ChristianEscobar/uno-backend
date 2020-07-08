'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const shuffledDeckSchema = new Schema({
	gameId: { type: String, required: true },
	seqNum: { type: Number, required: true },
	color: { type: String, required: true },
	value: { type: String, require: true },
});

const ShuffledDeck = mongoose.model(
	'ShuffledDeck',
	shuffledDeckSchema,
	'ShuffledDeck'
);

module.exports = ShuffledDeck;
