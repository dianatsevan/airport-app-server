const mongoose = require('mongoose');

const AirportSchema = new mongoose.Schema({
  code: { type: String, required: true },
  name: { type: String, requires: true }
});

const Airport = mongoose.model('airports', AirportSchema);

module.exports = {
  AirportModel: Airport
}