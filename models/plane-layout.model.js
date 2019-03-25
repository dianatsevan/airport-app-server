const mongoose = require('mongoose');

const PlaneLayoutSchema = new mongoose.Schema({
  code: { type: String, require: true, unique: true },
  rowsNumber: { type: Number, required: true },
  seatsInRow: { type: Array, required: true }
});

const PlaneLayout = mongoose.model('PlaneLayout', PlaneLayoutSchema);

module.exports = {
  PlaneLayoutModel: PlaneLayout
}