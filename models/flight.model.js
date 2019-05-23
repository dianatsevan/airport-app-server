const mongoose = require('mongoose');

const FlightSchema = new mongoose.Schema({
  code: { type: String, required: true, unique: true },
  fromCountry: { type: mongoose.Schema.Types.ObjectId, ref: 'Airport', required: true},
  toCountry: { type: mongoose.Schema.Types.ObjectId, ref: 'Airport', required: true},
  price: { type: Number, required: true },
  planeInfo: { type: mongoose.Schema.Types.ObjectId, ref: 'PlaneLayout', required: true },
  schedule: { type: Array, required: true },
  flightPeriod: { type: Object, required: true },
});

const Flight = mongoose.model('Flight', FlightSchema);

module.exports = {
  FlightModel: Flight
}