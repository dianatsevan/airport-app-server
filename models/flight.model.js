const mongoose = require('mongoose');

const FlightSchema = new mongoose.Schema({
  date: { type: Date, require: true },
  startTime: { type: String, required: true },
  endTime: { type: String, required: true },
  fromCountry: { type: mongoose.Schema.Types.ObjectId, ref: 'Airport', required: true},
  toCountry: { type: mongoose.Schema.Types.ObjectId, ref: 'Airport', required: true},
  price: { type: Number, required: true },
  planeInfo: { type: mongoose.Schema.Types.ObjectId, ref: 'PlaneLayout', required: true }
});

const Flight = mongoose.model('Flight', FlightSchema);

module.exports = {
  FlightModel: Flight
}