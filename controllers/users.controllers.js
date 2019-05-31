const User = require('../models/user.model');
const bcrypt = require('bcrypt');
const passport = require('passport');

exports.registerUser = (req, res) => {
  return res.status(200).json({id: req.body.id, token: req.body.token});
};

exports.logInUser = (req, res) => {
  User.UserModel.findOne({username: req.body.email})
    .exec()
    .then(user => res.status(200).send({id: user._id, token: req.body.token, role: req.body.role}))
    .catch(err => res.status(500).send(req.body.message));
};

exports.checkAuth = (req, res) => {
  return res.status(200).json(true);
}

exports.logOutUser = (req, res) => {
  req.logout();
  res.send('i logged out');
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
