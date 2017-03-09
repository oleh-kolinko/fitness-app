const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const workoutSchema = new Schema({
  name: String,
  owner: {type: Schema.Types.ObjectId, ref: 'User'},
  upvotes: Number,
  plan: [{
      day: Number,
      reps: String,
      exercise: String,
    }],

  goal: String,
  description: String
});


const Workout = mongoose.model('Workout', workoutSchema);

module.exports = Workout;
