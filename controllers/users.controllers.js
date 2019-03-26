const User = require('../models/user.model');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

exports.signUpUser = (req, res) => {
  if (req.body.password.length >= 6 || req.body.password.length <= 12) {
    bcrypt.hash(req.body.password, 10)
      .then(hash => {
        const user = new User.UserModel({
          ...req.body,
          password: hash
        });
        
        return user.save()
          .then(result => res.status(200).json(result))
          .catch(err => res.status(500).json(err.message));
      })
      .catch(err => res.status(500).json(err.message));
  } else {
    return res.status(500).json({message: "password length should be from 6 to 12"});  
  }
};

exports.logInUser = (req, res) => {
  User.UserModel.find({email: req.body.email})
    .exec()
    .then(user => {
      if (user.length < 1) {
        res.status(401).json({ message: 'Auth failed: email' });
      }

      bcrypt.compare(req.body.password, user[0].password)
        .then(result => {
          if (result) {
            const token = jwt.sign(
              {
                email: user[0].email,
                userId: user[0]._id
              },
              'secret',
              {
                expiresIn: '1h'
              }
            );
            const decoded = jwt.verify(token, 'secret');
            return res.status(200).json({message: 'Auth successful', token, decoded});
          } else {
            return res.status(401).json({message: 'Auth failed'});
          }
        })
        .catch(err => res.status(401).json({message: 'Auth failed'}));
    })
    .catch(err => res.status(500).json(err.message));
};

exports.deleteUser = (req, res) => {
  User.UserModel.deleteOne({_id: req.params.id})
    .exec()
    .then(() => res.status(200).json({}))
    .catch(err => res.status(500).send(err.message))
};
