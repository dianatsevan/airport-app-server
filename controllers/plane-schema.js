const planeSchemas = require('../mocked-data/plane-schemas.json');

const getPlaneSchema = (req, res, next) => {
  res.send(JSON.stringify(planeSchemas));
}

module.exports = { getPlaneSchema };