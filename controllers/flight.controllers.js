const Flight = require('../models/flight.model');
const mongoose = require('mongoose');
const helpers = require('./helpers');

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

  Flight.FlightSchema.findById(req.params.id, (err, flight) => {
    if (err) {
      return res.status(500).send(err.message);
    }

    helpers.updateField(req, flight, "date");
    helpers.updateField(req, flight, "startTime");
    helpers.updateField(req, flight, "endTime");
    helpers.updateField(req, flight, "fromCountry");
    helpers.updateField(req, flight, "toCountry");
    helpers.updateField(req, flight, "price");
    helpers.updateField(req, flight, "planeId");

    flight.save(err => {
      if (err) {
        res.status(500).send(err.message);
      } else {
        return res.json(flight);
      }
    });
  })
}

exports.deleteFlight = (req, res) => {
  if (req.params.id === undefined) {
    return res.status(400).send({});
  }

  Flight.FlightSchema.findById(req.params.id, (err, flight) => {
    if (err) {
      return res.status(500).send(err.message);
    }

    flight.remove((err) => {
      if (err) {
        return res.status(500).send(err.message);
      }

      res.status(200).send({});
    })
  });
}