/*
 *  Server-related tasks
 */

//Dependicies
const express = require('express');
const fs = require('fs');
const path = require('path');
const config = require('./config');
const handlers = require('./handlers');
const mongoose = require('mongoose');

// Instantiate the server module object
const server = {};

// server.httpsServer = https.createServer(server.httpsServerOptions, server.app);
const { MongoClient } = require('mongodb');

// Instantiate the express server
server.startApp = async function () {
  server.app = express();

  const client = new MongoClient(
    'mongodb+srv://shivu:Paganizonda5050@cluster0.ozpzz.mongodb.net/Cricbase?retryWrites=true&w=majority'
  );
  await client.connect();
  const database = await client
    .db('Cricbase')
    .collection('Cricket')
    .stats({}, (res) => console.log(res));

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

  server.app.get('/batsman', function (req, res) {
    handlers.batsman(req, res);
  });

  server.app.get('/baller', function (req, res) {
    handlers.ballers(req, res);
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
  //   server.connectMongo(config.mongoURL);

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
