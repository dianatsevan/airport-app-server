const LuggageType = require('../models/luggage-type.model');

exports.addLuggage = (req, res)  => {
  const luggageType = new LuggageType.LuggageTypeModel(req.body)
    .save()
    .then(luggageType => res.status(200).json(luggageType))
    .catch(err => res.status(500).json(err.message));
};

exports.getLuggageTypes = (req, res) => {
  LuggageType.LuggageTypeModel.find()
    .exec()
    .then(luggageTypes => res.status(200).json(luggageTypes))
    .catch(err => res.status(500).json(err.message));
};

exports.updateLuggageType = (req, res) => {
  if (req.params.id === undefined) {
    return res.status(400).send({});
  }

  LuggageType.LuggageTypeModel.updateOne({_id: req.params.id}, { $set: req.body })
    .exec()
    .then(luggageType => res.status(200).json(luggageType))
    .catch(err => res.status(500).send(err.message));
};

exports.deleteLuggageType = (req, res) => {
  if (req.params.id === undefined) {
    return res.status(400).send({});
  }

  LuggageType.LuggageTypeModel.deleteOne({_id: req.params.id})
    .exec()
    .then(() => res.status(200).json({}))
    .catch(err => res.status(500).send(err.message))
};
