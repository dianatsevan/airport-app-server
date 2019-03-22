const mongoose = require('mongoose');

const FlightSchema = new mongoose.Schema({
  date: { type: String, require: true },
  // date: { type: Date, require: true },
  startTime: { type: String, required: true },
  endTime: { type: String, required: true },
  fromCountry: { type: mongoose.Schema.Types.ObjectId, ref: 'Airport', required: true},
  toCountry: { type: mongoose.Schema.Types.ObjectId, ref: 'Airport', required: true},
  price: { type: Number, required: true },
  planeId: { type: Number, required: true }
});

const Flight = mongoose.model('Flight', FlightSchema);

module.exports = {
  FlightSchema: Flight
}