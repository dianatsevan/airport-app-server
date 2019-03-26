const User = require('../models/user.model');
const bcrypt = require('bcrypt');

exports.signUpUser = (req, res ) => {
  bcrypt.hash(req.body.password, 10, (err, hash) => {
    if (err) {
      return res.status(500).json(err.message);
    } else {
      const user = new User.UserModel({
        ...req.body,
        password: hash
      })
        .save()
        .then(result => res.status(200).json(result))
        .catch(err => res.status(500).json(err.message));
    }
  });
};

exports.deleteUser = (req, res) => {
  User.UserModel.deleteOne({_id: req.params.id})
    .exec()
    .then(() => res.status(200).json({}))
    .catch(err => res.status(500).send(err.message))
};
