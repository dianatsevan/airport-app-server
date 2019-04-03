const Order = require('../models/order.model');
const User = require('../models/user.model');
const Flight = require('../models/flight.model');

exports.createOrder = (req, res) => {
  const order = new Order.OrderModel(req.body)
    .save()
    .then(order => res.status(200).json(order))
    .catch(err => res.status(500).send(err.message));
};

exports.getOrders = (req, res) => {
  const { userId } = req.query;
  const filter = userId ? { userId } : {};

  Order.OrderModel.find(filter)
    .populate('userId')
    .populate('selectedFlight')
    .exec()
    .then(result => res.status(200).json(result))
    .catch(err => res.status(500).json(err.message));
}