const express = require('express');
const UserController = require('./controllers/UserController');

const routes = express.Router();

routes.get('/users/:page', UserController.index);
routes.post('/users', UserController.store);

module.exports = routes;