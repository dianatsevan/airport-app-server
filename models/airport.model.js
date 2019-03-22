const mongoose = require('mongoose');

const AirportSchema = new mongoose.Schema({
  code: { type: String, required: true },
  name: { type: String, required: true }
});

const Airport = mongoose.model('Airport', AirportSchema);

module.exports = {
  AirportModel: Airport
}