const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const exerciseSchema = new Schema({
  name: String,
  video: String,
  muscle: String,
  description: String
});

const Exercise = mongoose.model('Exercise', exerciseSchema);

module.exports = Exercise;
