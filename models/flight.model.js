const mongoose = require('mongoose');

const FlightSchema = new mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  date: { type: Date, require: true },
  startTime: { type: String, required: true },
  endTime: { type: String, required: true },
  // fromCountry: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Airport', required: true}],
  // toCountry: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Airport'}],
  fromCountry: { type: String, required: true },
  toCountry: { type: String, required: true },
  price: { type: Number, required: true },
  planeId: { type: Number, required: true }
});

const Flight = mongoose.model('flight', FlightSchema);

module.exports = {
  FlightSchema: Flight
}