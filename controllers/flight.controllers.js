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

      const flight = new Flight.FlightModel(req.body);
      return flight.save();
    })
    .then(flight => res.status(200).json(flight))
    .catch(err => res.status(500).send(err.message));
};

exports.getFlights = (req, res) => {
  const { fromCountry, toCountry } = req.query;

  const filter = fromCountry && toCountry 
    ? {
      fromCountry,
      toCountry,
    }
    : {};

  Flight.FlightModel.find(filter)
    .populate('fromCountry', 'name')
    .populate('toCountry', 'name')
    .populate('planeInfo')
    .exec()
    .then(result => res.status(200).json(result))
    .catch(err => res.status(500).send(err.message));
}

exports.getFlight = (req, res) => {
  if (req.params.id === undefined) {
    return res.status(400).send({});
  }

  Flight.FlightModel.findOne({_id: req.params.id})
    .populate('fromCountry', 'name')
    .populate('toCountry', 'name')
    .populate('planeInfo')
    .then(flight => res.status(200).json(flight))
    .catch(err => res.status(500).json(err.message));
}

exports.updateFlight = (req, res) => {
  if (req.params.id === undefined) {
    return res.status(400).send({});
  }

  Flight.FlightModel.updateOne({_id: req.params.id}, { $set: req.body })
    .exec()
    .then(flight => res.status(200).json(flight))
    .catch(err => res.status(500).json(err.message));
}

exports.deleteFlight = (req, res) => {
  if (req.params.id === undefined) {
    return res.status(400).send({});
  }

  Flight.FlightModel.deleteOne({_id: req.params.id})
    .exec()
    .then(() => res.status(200).json('ok'))
    .catch(err => res.status(500).json(err.message));
}