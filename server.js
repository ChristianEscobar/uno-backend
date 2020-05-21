const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const { routes } = require('./routes');

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const port = process.env.PORT || 3000;

const start = function start() {
	mongoose.connect(process.env.DATABASE, {
		useNewUrlParser: true,
		useUnifiedTopology: true,
	});
	app.use('/', routes);

	app.listen(port, () => {
		console.log(`Server started, listening on port ${port}`);
	});
};

module.exports = {
	start,
};
