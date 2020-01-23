const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const gameSchema = new Schema({
  id: { type: Number, required: true, unique: true },
  title: { type: String, required: true },
  released:{type:Date, required:true},
  creators: { type: [String], required: true },
  genres:{ type: [String], required: true },
  platforms:{ type: [String], required: true },
  link: { type: String, required: true },
  description: { type: String, required: true },
  image: { type: String, required: true }
});

const Game = mongoose.model("Book", gameSchema);

module.exports = Game;
