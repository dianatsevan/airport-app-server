const PlaneLayout = require('../models/plane-layout.model');
const Flight = require('../models/flight.model');

exports.addPlaneLayout = (req, res) => {
  PlaneLayout.PlaneLayoutModel.findOne({ code: req.body.code })
    .exec()
    .then(planeLayout => {
      if (planeLayout) {
        return res.status(500).send('Code duplication');
      }

    const plane = new PlaneLayout.PlaneLayoutModel(req.body)
      .save()
      .then(plane => res.status(200).json(plane))
    })
    .catch(err => res.status(500).send(err.message));
};

exports.getPlaneLayouts = (req, res) => {
  PlaneLayout.PlaneLayoutModel.find()
    .exec()
    .then(planeLayouts => res.status(200).json(planeLayouts))
    .catch(err => res.status(500).send(err.message));
};

exports.updatePlaneLayout = (req, res) => {
  if (req.params.id === undefined) {
    return res.status(400).send({});
  }

  PlaneLayout.PlaneLayoutModel.findOne({ code: req.body.code })
    .exec()
    .then(planeLayout => {
      if (planeLayout && planeLayout._id != req.params.id) {
        return res.status(500).send('Code duplication');
      }

      PlaneLayout.PlaneLayoutModel.updateOne({_id: req.params.id}, { $set: req.body })
        .exec()
        .then(planeLayout => res.status(200).json(planeLayout))
    })
    .catch(err => res.status(500).send(err.message))
};

exports.deletePlaneLayout = (req, res) => {
  if (req.params.id === undefined) {
    return res.status(400).send({});
  }

  PlaneLayout.PlaneLayoutModel.deleteOne({_id: req.params.id})
    .exec()
    .then(() => res.status(200).json({}))
    .catch(err => res.status(500).send(err.message))
};
