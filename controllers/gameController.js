const db = require("../models");
//const bcrypt = require("bcryptjs");

// Defining methods for the GameController
module.exports = {
  findAll: function (req, res) {
    db.User
      .find(req.query)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findOne: function (req, res) {
    //console.log("req.params=",req.params);
    db.User
      .findOne(req.params)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findById: function (req, res) {
    db.User
      .findById(req.params.id)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  create: function (req, res) {
    /*console.log("Create req body=", req.body);
    const saltRounds = 10;
    const hashedPassword = bcrypt.hash(req.body.password, saltRounds, function (err, hash) {
      console.log("Create hashed password=", hash);
      const newRequest = {
        name: req.body.name,
        email: req.body.email,
        password: hash
      }
      db.User
        .create(newRequest)
        .then(dbGame => {
          res.json(dbGame)
        })
        .catch(err => res.status(422).json(err));
    });*/
    db.User
    .create(req.body)
    .then(dbGame => res.json(dbGame))
    .catch(err => res.status(422).json(err));
  },
  update: function (req, res) {
    db.User
      .findOneAndUpdate({ id: req.params.id }, req.body)
      .then(dbGame => res.json(dbGame))
      .catch(err => res.status(422).json(err));
  },
  remove: function (req, res) {
    db.User
      .findById(req.params.id)
      .then(dbGame => dbGame.remove())
      .then(dbGame => res.json(dbGame))
      .catch(err => res.status(422).json(err));
  },
  createDetails: function (req, res) {
    db.SavedGames
    .create(req.body)
    .then(dbGame => res.json(dbGame))
    .catch(err => res.status(422).json(err));
  },
  getGamesDetails: function (req, res) {
    db.SavedGames
    .find({})
    .then(dbGame => {
      //console.log("res=",dbGame);
      return res.json(dbGame)})
    .catch(err => res.status(422).json(err));
  },
  removeGamesDetails:function(req,res){
    db.SavedGames
    .remove({id:req.params.id})
    .then(dbGame => res.json(dbGame))
    .catch(err => res.status(422).json(err));
  }
};
