const mongoose = require('mongoose');
const Flight = require('../models/flight.model');
const Airport = require('../models/airport.model');

exports.addFlight = (req, res) => {
  Airport.AirportModel.findById(req.body.fromCountry)
    .then(airport => {
      if (!airport) {
        return res.status(404).json({
          message: "airport is not found"
        });
      }
      console.log(airport);
      const flight = new Flight.FlightSchema(req.body);
      return flight
        .save()
    })
    .then(flight => res.status(200).json(flight))
    .catch(err => res.status(500).send(err.message));

  // const flight = new Flight.FlightSchema(req.body)
  //   .save()
  //   .then(flight => res.status(200).json(flight))
  //   .catch(err => res.status(500).send(err.message));
};

exports.getFlights = (req, res) => {
  const { fromCountry, toCountry } = req.query;
  const filter = fromCountry && toCountry ? { fromCountry, toCountry } : {};

  Flight.FlightSchema.find(filter)
    .exec()
    .then(flights => res.status(200).json(flights))
    .catch(err => res.status(500).send(err.message));
}

exports.updateFlight = (req, res) => {
  if (req.params.id === undefined) {
    return res.status(400).send({});
  }

  Flight.FlightSchema.updateOne({_id: req.params.id}, { $set: req.body })
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