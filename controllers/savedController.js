const Saved = require("../models/saved");
const db = require("../models");
const User = require("../models/user");


module.exports = {

  findAll: function(req, res) {
      Saved
      .find(req.query)
      .populate('activity_id')
      .then(saved => res.json(saved))
      .catch(err => res.status(422).json(err));
  },

  //not being used right now
  findById: function(req, res) {
    Saved
      .findById(req.params.id)
      .then(saved => res.json(saved))
      .catch(err => res.status(422).json(err));
  },

  create: function(req, res) {
    Saved
      .create(req.body)
      .then(saved => res.json(saved))
      .catch(err => res.status(422).json(err));
  },

//not being used
  update: function(req, res) {
    Saved
      .findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(saved => res.json(saved))
      .catch(err => res.status(422).json(err));
  },
//   not being used
  remove: function(req, res) {
    Saved
      .findById({ _id: req.params.id })
      .then(saved => saved.remove())
      .then(saved => res.json(saved))
      .catch(err => res.status(422).json(err));
  },


};
