const PlaneLayout = require('../models/plane-layout.model');

exports.addPlaneLayout = (req, res) => {
  const planeLayout = new PlaneLayout.PlaneLayoutModel(req.body)
    .save()
    .then(planeLayout => res.status(200).json(planeLayout))
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

  PlaneLayout.PlaneLayoutModel.updateOne({_id: req.params.id}, { $set: req.body })
    .exec()
    .then(planeLayout => res.status(200).json(planeLayout))
    .catch(err => res.status(500).send(err.message));
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
