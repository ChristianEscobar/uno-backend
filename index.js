'use strict';

require('dotenv').config();
const { startServer } = require('./server');

try {
	startServer();
} catch (err) {
	console.error(
		`Error encountered while attempting to run server: ${err.message}`
	);
}
