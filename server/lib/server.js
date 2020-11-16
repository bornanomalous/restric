/*
 *  Server-related tasks
 */

//Dependicies
const express = require("express");
const http = require("http");
const https = require("https");
const fs = require("fs");
const path = require("path");
const config = require("./config");
const handlers = require("./handlers");
const mongoose = require("mongoose");

// Instantiate the server module object
const server = {}

server.httpsServer = https.createServer(server.httpsServerOptions, server.app);

// Instantiate the express server
server.startApp = function () {
    server.app = express()
}

// Connect to the mongoose server
server.connectMongo = function(url) {
    mongoose.connect(url, {useUnifiedTopology: true, useNewUrlParser: true}, function(err) {
        if (err) throw err;
        console.log('\x1b[36m%s\x1b[0m', "Connection with Mongo DB Successfull");
    });
    server.db = mongoose.connection;
}

// Router to direct the requests
server.router = function() {
    server.app.get("/ping", function(req, res) {
        handlers.ping(req, res);
    });

    server.app.get("/playername", function(req, res) {
        handlers.playerName(req, res);
    });

    server.app.get("/country", function(reqm, res) {
        handlers.country(req, res);
    });

    server.app.get("/batsman", function(reqm, res) {
        handlers.batsman(req, res);
    });

    server.app.get("/baller", function(reqm, res) {
        handlers.ballers(req, res);
    });

    server.app.get("/team", function(reqm, res) {
        handlers.team(req, res);
    });
}

// Init server
server.init = function () {
    // Start the express app
    server.startApp();

    // Connect to the mongo server
    server.connectMongo(config.mongoURL);

    // start the server in the port 3000 !
    server.app.listen(config.httpPort, function () {
        console.log('\x1b[35m%s\x1b[0m', "Restric server is listening on port " + config.httpPort)
    });

    // Route the requests to the specific handlers
    server.router()
}

// Export the server
module.exports = server;