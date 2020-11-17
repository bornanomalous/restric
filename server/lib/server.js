/*
 *  Server-related tasks
 */

//Dependicies
const express = require('express');
const config = require('./config');
const handlers = require('./handlers');
const mongoose = require('mongoose');

// Instantiate the server module object
const server = {};
server.models = {};

// Instantiate the express server
server.startApp = function () {
  server.app = express();
};

// Connect to the mongoose server
server.connectMongo = async function (url) {
  mongoose.connect(
    url,
    { useNewUrlParser: true, useUnifiedTopology: true },
    function (err, db) {
      if (err) throw err;
      console.log('\x1b[36m%s\x1b[0m', 'Connection with Mongo DB Successfull');
    }
  );
};
// Router to direct the requests
server.router = function () {
  server.app.get('/ping', function (req, res) {
    handlers.ping(req, res);
  });

  server.app.get('/playername', function (req, res) {
    handlers.playerName(req, res);
  });

  server.app.get('/country', function (req, res) {
    handlers.country(req, res);
  });

  server.app.get('/battingStyle', function (req, res) {
    handlers.battingStyle(req, res);
  });

  server.app.get('/bowllingStyle', function (req, res) {
    handlers.bowllingStyle(req, res);
  });

  server.app.get('/team', function (req, res) {
    handlers.team(req, res);
  });
};

// Init server
server.init = function () {
  // Start the express app
  server.startApp();

  // Connect to the mongo server
  server.connectMongo(config.mongoURL);

  // start the server in the port 3000 !
  server.app.listen(config.httpPort, function () {
    console.log(
      '\x1b[35m%s\x1b[0m',
      'Restric server is listening on port ' + config.httpPort
    );
  });

  // Route the requests to the specific handlers
  server.router();
};

// Export the server
module.exports = server;
