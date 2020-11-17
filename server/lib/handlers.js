/*
 *   These are the requets handlers
 */

// Dependencies
const url = require("url");
const player = require("../models/player");

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

    let doc = mongoose.findOne();
    console.log(doc);

    res.writeHeader(200);
    res.end();
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

    player.findOne({
        NAME: batsman
    }, function (err, data) {
        if (err) {
            res.writeHead(404)
            res.end()
        } else {
            res.json(data);
        }
    });
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

    player.findOne({
        NAME: baller
    }, function (err, data) {
        if (err) {
            res.writeHead(404)
            res.end()
        } else {
            res.json(data);
        }
    });
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

    player.find({'Major teams': team}, function(err, data) {

        if (err) {
            res.writeHead(404)
            res.end()
        } else {
            if (data instanceof object) {
                res.end(JSON.stringify(data))
            } else {
                res.end(data.toString())
            }
        }
    });
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
    const playerName = queryStringObject.playerName;

    player.findOne({NAME: playerName}, function(err, data) {
        if (err) {
            res.writeHead(404)
            res.end()
        } else {
            res.json(data);
        }
    });
}

// Export thee handler
module.exports = handlers;