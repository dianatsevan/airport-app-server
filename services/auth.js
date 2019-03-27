const jwt = require('jsonwebtoken');

exports.generateToken = (id) => {
  const token = jwt.sign(
    {
      id,
      exp: Math.floor(Date.now() / 1000) + parseInt(360000000)
    },
    'so_secret');
  return `bearer ${token}`;
};

