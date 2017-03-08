const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const exerciseSchema = new Schema({
  name: String,
  video: String,
  img1: String,
  img2: String,
  bodyOnly: Boolean,
  muscle: String,
  description: String
});

const Exercise = mongoose.model('Exercise', exerciseSchema);

module.exports = Exercise;
