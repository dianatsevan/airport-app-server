const mongoose = require('mongoose');

const PlaneLayoutSchema = new mongoose.Schema({
  code: { type: String, require: true, unique: true },
  rows: { type: Number, required: true },
  location: { type: Array, required: true }
});

const PlaneLayout = mongoose.model('PlaneLayout', PlaneLayoutSchema);

module.exports = {
  PlaneLayoutModel: PlaneLayout
}