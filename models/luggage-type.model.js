const mongoose = require('mongoose');

const LuggageTypeSchema = new mongoose.Schema({
  kg: { type: Number, required: true, unique: true },
  price: { type: Number, required: true }
});

const LuggageType = mongoose.model('LuggageType', LuggageTypeSchema);

module.exports = {
  LuggageTypeModel: LuggageType
}