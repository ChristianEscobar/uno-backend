const express = require('express');
const bodyParser = require('body-parser');
const { routes } = require('./routes');

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const port = process.env.PORT || 3000;

const start = function start() {
	app.use('/', routes);

	app.listen(port, () => {
		console.log(`Server started, listening on port ${port}`);
	});
};

module.exports = {
	start,
};
