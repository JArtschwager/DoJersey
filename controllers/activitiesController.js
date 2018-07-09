const TodoNJ = require("../models/todonj");
const db = require("../models");
const User = require("../models/user");

// Defining methods for the Controller
module.exports = {
  //findAll being used under router in todonjRoutes.js
  findAll: function(req, res) {
      TodoNJ
      .find(req.query)
      // .sort({ date: -1 })
      .then(todonj => res.json(todonj))
      .catch(err => res.status(422).json(err));
  },
  //not being used right now
  findById: function(req, res) {
    TodoNJ
      .findById(req.params.id)
      .then(todonj => res.json(todonj))
      .catch(err => res.status(422).json(err));
  },
 //create being used under router in todonjRoutes.js

  create: function(req, res) {
    TodoNJ
      .create(req.body)
      .then(todonj => res.json(todonj))
      .catch(err => res.status(422).json(err));
  },

//not being used
  update: function(req, res) {
    TodoNJ
      .findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(todonj => res.json(todonj))
      .catch(err => res.status(422).json(err));
  },
//   not being used
  remove: function(req, res) {
    todoNJ
      .findById({ _id: req.params.id })
      .then(todonj => todonj.remove())
      .then(todonj => res.json(todonj))
      .catch(err => res.status(422).json(err));
  },

register: function (req, res) {
  /* To create a new user */
  User
    .register(new User({username: req.body.username}), req.body.password, function (err) {
      if (err) {
        console.log('error while user register!', err);
        return res.status(422).json(err);
      }
      console.log('user registered!');
      res.json(true);
    });
}
};
