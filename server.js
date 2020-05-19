const express = require('express');
const { routes } = require('./routes');
const app = express();
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
