const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema
const savedGamesSchema = new Schema({
    id: {
        type: Number,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    metascore: {
        type: Number,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    username:{
        type:String,
        required:true
    },
    date: {
        type: Date,
        default: Date.now
    },
    // `user` is an object that stores a User id
    // The ref property links the ObjectId to the User model
    // This allows us to populate the saved game with an associated user
    user: {
        type: Schema.Types.ObjectId,
        ref: "User"
    }

});

const SavedGames = mongoose.model("SavedGame", savedGamesSchema);

module.exports = SavedGames;