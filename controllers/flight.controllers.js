const Flight = require('../models/flight.model');
const mongoose = require('mongoose');

exports.addFlight = (req, res) => {
  const flight = new Flight.FlightSchema({
    _id: new mongoose.Types.ObjectId,
    date: req.body.date,
    startTime: req.body.startTime,
    endTime: req.body.andTime,
    fromCountry: req.body.fromCountry,
    toCountry: req.body.toCountry,
    price: req.body.price,
    planeId: req.body.planeId,
  }).save()
    .then(flight => res.status(200).json(flight))
    .catch(err => res.status(500).send(err.message));
};

exports.getFlights = (req, res, values) => {
  if (req.query.fromCountry) {
    Flight.FlightSchema.find({ fromCountry: req.query.fromCountry, toCountry: req.query.toCountry })
      .exec()
      .then(flights => res.status(200).json(flights))
      .catch(err => res.status(500).send(err.message));

  } else {
    Flight.FlightSchema.find()
      .exec()
      .then(flights => res.status(200).json(flights))
      .catch(err => res.status(500).send(err.message));
  }
}

exports.updateFlight = (req, res) => {
  if (req.params.id === undefined) {
    return res.status(400).send({});
  }

  const updateOps = {};
  for (const ops of req.body) {
    updateOps[ops.propName] = ops.value;
  }

  Flight.FlightSchema.update({_id: req.params.id}, { $set: updateOps })
    .exec()
    .then(flight => res.status(200).json(flight))
    .catch(err => res.status(500).json(err.message));
}

exports.deleteFlight = (req, res) => {
  if (req.params.id === undefined) {
    return res.status(400).send({});
  }

  Flight.FlightSchema.deleteOne({_id: req.params.id})
    .exec()
    .then(() => res.status(200).json('ok'))
    .catch(err => res.status(500).json(err.message));
}