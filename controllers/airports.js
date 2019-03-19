const Airport = require("../models/airport.model");

exports.create = function (req, res) {
  const airport = new Airport.AirportModel({
    code: req.body.code,
    name: req.body.name,
  }).save(function (err, airport) {
    if (err) {
      res.status(500).send(err.message);
    }

    res.json(airport);
  });
};

exports.readOne = function (req, res) {
  if (req.params.id === undefined) {
    return res.status(400).send({});
  }

  Airport.AirportModel.findOne({
    id: req.params.id
  }, function (err, airport) {
    if (err) {
      return res.status(500).send(err.message);
    }

    return res.json(airport);
  })
};

exports.readAll = function (req, res) {
  Airport.AirportModel.find(function (err, airport) {
    if (err) {
      return res.status(500).send(err.message);
    }

    return res.json(airport);
  });
};

exports.update = function (req, res) {
  if (req.params.id === undefined) {
    return res.status(400).send({});
  }

  Airport.AirportModel.findById(req.params.id, function (err, airport) {
    if (err) {
      return res.status(500).send(err.message);
    }

    if (req.body.code !== undefined) {
      airport.code = req.body.code;
    }

    if (req.body.name !== undefined) {
      airport.name = req.body.name;
    }

    airport.save(function (err) {
      if (err) {
        res.status(500).send(err.message);
      } else {
        return res.json(airport);
      }
    });
  });
};

exports.delete = function (req, res) {
  if (req.params.id === undefined) {
    return res.status(400).send({});
  }

  Airport.AirportModel.findById(req.params.id, function (err, airport) {
    if (err) {
      return res.status(500).send(err.message);
    }

    airport.remove(function (err) {
      if (err) {
        return res.status(500).send(err.message);
      }

      res.status(200).send({});
    })
  });
};
