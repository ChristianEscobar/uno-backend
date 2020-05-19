require('dotenv').config();
const { start } = require('./server');

try {
	start();
} catch (err) {
	console.error(
		`Error encountered while attempting to run server: ${err.message}`
	);
}
