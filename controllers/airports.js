const airports = require('../mocked-data/airports.json');

const getAirports = (req, res, next) => {
  res.send(JSON.stringify(airports));
}

module.exports = {
  getAirports
}