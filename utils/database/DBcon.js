'use strict';

const mongoose = require('mongoose');

class DBcon {
	constructor() {
		this.databaseName = process.env.DATABASE;
		this.conn = null;
	}

	async connect() {
		try {
			await mongoose.connect(this.databaseName, {
				useNewUrlParser: true,
				useUnifiedTopology: true,
			});
			this.conn = mongoose.connection;

			console.log('connected to database');
		} catch (err) {
			throw new Error(`Error connecting to database: ${err.message}`);
		}
	}

	get connection() {
		return this.conn;
	}
}

module.exports = DBcon;
