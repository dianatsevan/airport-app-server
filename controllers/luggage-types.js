const luggageTypes = require('../mocked-data/luggage-types.json');

const getLuggageTypes = (req, res, next) => {
  res.send(JSON.stringify(luggageTypes));
}

module.exports = {
  getLuggageTypes
}