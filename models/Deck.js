const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const deckSchema = new Schema({
	seqNum: { type: Number, required: true },
	color: { type: String, required: true },
	value: { type: String, require: true },
});

const Deck = mongoose.model('Deck', deckSchema, 'Deck');

module.exports = Deck;
