const Airport = require("../models/airport.model");
const Flight = require("../models/flight.model");

exports.addAirport = (req, res) => {
  req.body.forEach(elem => {
    Airport.AirportModel.findOne({ code: elem.code })
      .exec()
      .then(result => {
        if (result) {
          return res.status(500).send(`${elem.name} is already in DB`);
        }

        const airport = new Airport.AirportModel(elem)
          .save()
          .then(airport => {
            res.status(200).json(airport);
            // Promise.resolve();
          })
      })
      .catch(err => res.status(500).send(err.message));
  });
};

exports.getAirports = (req, res) => {
  Airport.AirportModel.find({}, null, { sort: { [req.query.orderBy || 'name']: req.query.direction || 1 }})
    .exec()
    .then(airports => res.status(200).json(airports))
    .catch(err => res.status(500).send(err.message));
};

exports.updateAirport = (req, res) => {
  if (req.params.id === undefined) {
    return res.status(400).send({});
  }

  Airport.AirportModel.findOne({ code: req.body.code })
    .exec()
    .then(result => {
      if (result && (result._id != req.params.id)) {
        return res.status(500).send('Code duplication');
      }

      Airport.AirportModel.updateOne({_id: req.params.id}, { $set: req.body })
        .exec()
        .then(airport => res.status(200).json(airport))
    })
    .catch(err => res.status(500).send(err.message));
};

exports.deleteAirport = (req, res) => {
  if (req.params.id === undefined) {
    return res.status(400).send({});
  }

  Airport.AirportModel.deleteOne({_id: req.params.id})
    .exec()
    .then(() => res.status(200).json({}))
    .catch(err => res.status(500).send(err.message))
};
