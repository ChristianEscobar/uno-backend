const routes = require('express').Router();

routes.get('/ping', (req, res) => {
	res.status(200).json({ message: 'Pong! Application is up and running' });
});

module.exports = { routes };
