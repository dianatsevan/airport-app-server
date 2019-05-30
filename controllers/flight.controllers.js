const Flight = require('../models/flight.model');
const Airport = require('../models/airport.model');

exports.addFlight = (req, res) => {
  Flight.FlightModel.findOne({ code: req.body.code })
    .exec()
    .then(flight => {
      if (flight) {
        return res.status(500).send('Code duplication');
      }

      const newFlight = new Flight.FlightModel(req.body);
      return newFlight.save();
    })
    .then(newFlight => res.status(200).json(newFlight))
    .catch(err => res.status(500).send(err.message));
};

exports.getFlights = (req, res) => {
  const { fromCountry, toCountry, planeInfo } = req.query;

  let filter = {};

  if (fromCountry) {
    filter = { fromCountry };
  }
  if (toCountry) {
    filter = { toCountry };
  }
  if (fromCountry && toCountry) {
    filter = { fromCountry, toCountry };
  }
  if (planeInfo) {
    filter = { planeInfo };
  }

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

  Flight.FlightModel.findOne({ code: req.body.code })
    .exec()
    .then(flight => {
      if (flight && (flight._id != req.params.id)) {
        return res.status(500).send('Code duplication');
      }

      Flight.FlightModel.updateOne({_id: req.params.id}, { $set: req.body })
        .exec()
        .then(updatedFlight => res.status(200).json(updatedFlight))
    })
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