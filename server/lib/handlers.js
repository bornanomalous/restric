/*
 *   These are the requets handlers
 */

// Dependencies
const url = require('url');
const player = require('../models/player');

// Define handlers
var handlers = {};

// Ping handler
handlers.ping = function (req, res) {
  res.writeHead(200);
  res.end();
};

// Country Handler
// Required Data: country
// Optional Data: limit
handlers.country = function (req, res) {
  // Get the url and parse it
  const parsedURL = url.parse(req.url, true);

  // Get the query string as an object
  const queryStringObject = parsedURL.query;

  // Get the requested player name
  const country = queryStringObject.country;

  // let doc = mongoose.findOne();
  // console.log(doc);
  res.send('hello');

  player
    .find({ COUNTRY: country }, function (err, data) {
      if (err) {
        res.writeHead(404);
        res.end();
      } else {
        res.json(data);
      }
    })
    .limit(5);
};

// Batsman Handler
// Required Data: Batting style
// Optional Data: limit
handlers.battingStyle = function (req, res) {
  // Get the url and parse it
  const parsedURL = url.parse(req.url, true);

  // Get the query string as an object
  const queryStringObject = parsedURL.query;

  // Get the requested player name
  const battingStyle = queryStringObject.battingStyle;

  console.log(battingStyle);

  player
    .find(
      {
        'Batting style': battingStyle,
      },
      function (err, data) {
        if (err) {
          res.writeHead(404);
          res.end();
        } else {
          res.json(data);
        }
      }
    )
    .limit(5);
};

// baller Handler
// Required Data: Bowling style
// Optional Data: limit
handlers.bowllingStyle = function (req, res) {
  // Get the url and parse it
  const parsedURL = url.parse(req.url, true);

  // Get the query string as an object
  const queryStringObject = parsedURL.query;

  // Get the requested player name
  const bowllingStyle = queryStringObject.bowllingStyle;

  player
    .find(
      {
        'Bowling style': bowllingStyle,
      },
      function (err, data) {
        if (err) {
          res.writeHead(404);
          res.end();
        } else {
          res.json(data);
        }
      }
    )
    .limit(5);
};

// Playername Handler
// Required Data: Team Name
// Optional Data: limit
handlers.team = function (req, res) {
  // Get the url and parse it
  const parsedURL = url.parse(req.url, true);

  // Get the query string as an object
  const queryStringObject = parsedURL.query;

  // Get the requested player name
  const team = queryStringObject.team;

  player
    .find({ 'Major teams': team }, function (err, data) {
      if (err) res.writeHead(404);
      else res.json(data);
    })
    .limit(5);
};

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

  player.findOne({ NAME: playerName }, function (err, data) {
    if (err) {
      res.writeHead(404);
      res.end();
    } else {
      res.json(data);
    }
  });
};

// Export thee handler
module.exports = handlers;
