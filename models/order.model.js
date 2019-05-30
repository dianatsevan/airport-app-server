const mongoose = require('mongoose');

const PassengerInfoSchema = new mongoose.Schema({
  firstname: { type: String, required: true },
  lastname: { type: String, required: true },
  luggagePrice: { type: Number, required: true },
  luggageKg: { type: Number, required: true },
  selectedSeat: { type: String, required: true },
});

const OrderSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  fromCountry: { type: String, required: true },
  toCountry: { type: String, required: true },
  departureDate: { type: Date, required: true },
  startTime: { type: String, required: true },
  endTime: { type: String, required: true },
  passengersAmount: { type: Number, required: true },
  selectedFlight: { type: mongoose.Schema.Types.ObjectId, ref: 'Flight', required: true },
  // planeCode: { type: String, required: true },
  passengersInfo: { type: [PassengerInfoSchema], required: true }
});

const Order = mongoose.model('Order', OrderSchema);

module.exports = {
  OrderModel: Order
}