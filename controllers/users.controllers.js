const User = require('../models/user.model');
const bcrypt = require('bcrypt');
const passport = require('passport');

exports.registerUser = (req, res) => {
  if (req.body.password.length >= 6 || req.body.password.length <= 12) {
    const saltRounds = 10;
    bcrypt.hash(req.body.password, saltRounds)
      .then(hash => {
        const user = new User.UserModel({
          ...req.body,
          password: hash
        });

        return user.save()
          .then(result => res.status(200).json(result))
          .catch(err => res.status(500).json(err.message));
      })
  } else {
    return res.status(500).json({message: "password length should be from 6 to 12"});  
  }
};

exports.logInUser = (req, res, next) => {
  passport.authenticate('local-login', {session: false}, (err, user, info) => {
    if (err) {
      return next(err);
    }

    if (user) {
      return req.login(user, (err) => {
        if (err) {
          return next(err);
        }
        return res.status(200).json(req.body.token);
      });
    }
  })(req, res, next);
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
