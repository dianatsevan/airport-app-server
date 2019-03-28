const User = require('../models/user.model');
const bcrypt = require('bcrypt');
const passport = require('passport');

exports.registerUser = (req, res) => {
  return res.status(200).json({username: req.body.email, token: req.body.token});
};

exports.logInUser = (req, res) => {
  return res.status(200).json({username: req.body.email, token: req.body.token});
};

exports.getUsers = (req, res) => {
  User.UserModel.find()
    .exec()
    .then(users => res.status(200).json(users))
    .catch(err => res.status(500).json({ error: err.message }));
};

exports.deleteUser = (req, res) => {
  User.UserModel.deleteOne({_id: req.params.id})
    .exec()
    .then(() => res.status(200).json({}))
    .catch(err => res.status(500).send(err.message))
};
