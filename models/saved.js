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
    date: {
        type: Date,
        default: Date.now
    }
});

const SavedGames = mongoose.model("SavedGamed", savedGamesSchema);

module.exports = SavedGames;