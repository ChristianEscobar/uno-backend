'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const { routes } = require('./routes');
const initialize = require('../utils/initialize');
const DBcon = require('../utils/database/DBcon');

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const port = process.env.PORT || 3000;

const startServer = async function startServer() {
	const dbCon = new DBcon();
	await dbCon.connect();
	await initialize.populateDeck();
	app.use('/', routes);

	app.listen(port, () => {
		console.log(`Server started, listening on port ${port}`);
	});
};

module.exports = {
	startServer,
};
