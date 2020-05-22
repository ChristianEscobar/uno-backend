'use strict';

const mongoose = require('mongoose');

class DBcon {
	constructor() {
		this.databaseName = process.env.DATABASE;
	}

	async connect() {
		try {
			await mongoose.connect(this.databaseName, {
				useNewUrlParser: true,
				useUnifiedTopology: true,
			});

			console.log('connected to database');
		} catch (err) {
			throw new Error(`Error connecting to database: ${err.message}`);
		}
	}
}

module.exports = DBcon;
