const mongoose = require("mongoose")
const Schema = mongoose.Schema;

// Player Schema
const PlayerSchema = new Schema({
    'NAME': String,
    'COUNTRY': String,
    'Born': String,
    'Died': String,
    'Major teams': String,
    'Height': String,
    'Playing role': String,
    'Batting style': String,
    'Bowling style': String,
    'BATTING_Tests_Mat': String,
    'BATTING_Tests_Ave': String,
    'BATTING_Tests_100': String,
    'BATTING_Tests_50': String,
    'BATTING_ODIs_Mat': String,
    'BATTING_ODIs_Ave': String,
    'BATTING_ODIs_100': String,
    'BATTING_ODIs_50': String,
    'BATTING_T20Is_Mat': String,
    'BATTING_T20Is_Ave': String,
    'BATTING_T20Is_100': String,
    'BATTING_T20Is_50': String,
    'BATTING_T20s_Mat': String,
    'BATTING_T20s_Ave': String,
    'BATTING_T20s_100': String,
    'BATTING_T20s_50': String,
    'BOWLING_T20Is_Mat': String,
    'BOWLING_Tests_Wkts': String,
    'BOWLING_ODIs_Mat': String,
    'BOWLING_ODIs_Wkts': String,
    'BOWLING_T20Is_Mat': String,
    'BOWLING_T20Is_Wkts': String
});

const player = mongoose.model("player", PlayerSchema);

module.exports = player;