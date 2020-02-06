const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema
const savedGamesSchema = new Schema({
    id: {
        type: Number,
        required:true
    },
    name: {
        type: String,
        required: true
    },
    metascore:{
        type: Number,
        required:true
    },
    image:{
        type:String,
        required:true
    },
    date: {
        type: Date,
        default: Date.now
    }
});

const SavedGames = mongoose.model("SavedGame", savedGamesSchema);

module.exports = SavedGames;