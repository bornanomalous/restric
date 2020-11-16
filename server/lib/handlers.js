/*
 *   These are the requets handlers
 */

// Dependencies
const mongoose = require("mongoose");
const url = require("url");

// Define handlers
var handlers = {};

// Ping handler
handlers.ping = function (req, res) {
    res.writeHead(200)
    res.end();
};

// Country Handler
// Required Data: Player Name
// Optional Data: None
handlers.country = function (req, res) {
    // Get the url and parse it
    const parsedURL = url.parse(req.url, true);

    // Get the query string as an object
    const queryStringObject = parsedURL.query;

    // Get the requested player name
    const country =  queryStringObject.country;
}

// Batsman Handler
// Required Data: Player Name
// Optional Data: None
handlers.batsman = function (req, res) {
    // Get the url and parse it
    const parsedURL = url.parse(req.url, true);

    // Get the query string as an object
    const queryStringObject = parsedURL.query;

    // Get the requested player name
    const batsman = queryStringObject.batsman;
}

// baller Handler
// Required Data: Player Name
// Optional Data: None
handlers.baller = function (req, res) {
    // Get the url and parse it
    const parsedURL = url.parse(req.url, true);

    // Get the query string as an object
    const queryStringObject = parsedURL.query;

    // Get the requested player name
    const baller = queryStringObject.baller;
}

// Playername Handler
// Required Data: Player Name
// Optional Data: None
handlers.team = function (req, res) {
    // Get the url and parse it
    const parsedURL = url.parse(req.url, true);

    // Get the query string as an object
    const queryStringObject = parsedURL.query;

    // Get the requested player name
    const team = queryStringObject.team;
}

// Playername Handler
// Required Data: Player Name
// Optional Data: None
handlers.playerName = function (req, res) {
    // Get the url and parse it
    const parsedURL = url.parse(req.url, true);

    // Get the query string as an object
    const queryStringObject = parsedURL.query;

    // Get the requested player name
    const palyerName = queryStringObject.playerName;
}

// Export thee handler
module.exports = handlers;