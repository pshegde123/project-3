const db = require("../models");

// Defining methods for the GameController
module.exports = {
  findAll: function(req, res) {
    db.Game.find(req.query)
      .then(dbGame => res.json(dbGame))
      .catch(err => res.status(422).json(err));
  },
  findById: function(req, res) {
    db.Game.findById(req.params.id)
      .then(dbGame => res.json(dbGame))
      .catch(err => res.status(422).json(err));
  },
  create: function(req, res) {
    db.Game.create(req.body)
      .then(dbGame => res.json(dbGame))
      .catch(err => res.status(422).json(err));
  },
  update: function(req, res) {
    db.Game.findOneAndUpdate({ id: req.params.id }, req.body)
      .then(dbGame => res.json(dbGame))
      .catch(err => res.status(422).json(err));
  },
  remove: function(req, res) {
    db.Game.findById(req.params.id)
      .then(dbGame => dbGame.remove())
      .then(dbGame => res.json(dbGame))
      .catch(err => res.status(422).json(err));
  }
};
