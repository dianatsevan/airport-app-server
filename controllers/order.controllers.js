const Order = require('../models/order.model');
const User = require('../models/user.model');
const Flight = require('../models/flight.model');
const moment = require('moment');

exports.createOrder = (req, res) => {
  const order = new Order.OrderModel(req.body)
    .save()
    .then(order => res.status(200).json(order))
    .catch(err => res.status(500).send(err.message));
};

exports.getOrders = (req, res) => {
  const { selectedFlight, userId, type } = req.query;
  const date = moment(req.query.date).format('L');
  let filter = {};
  if (selectedFlight) {
    filter = { selectedFlight };
  }

  if (userId && date) {
    if (type === "future") filter = { userId, departureDate: {$gte: date} };
    if (type === "past") filter = { userId, departureDate: {$lt: date} };
  }

  Order.OrderModel.find(filter)
    .populate('user')
    .populate('selectedFlight')
    .populate('planeInfo')
    .exec()
    .then(result => res.status(200).json(result))
    .catch(err => res.status(500).json(err.message));
}