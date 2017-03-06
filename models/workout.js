const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const workoutSchema = new Schema({
  name: String,
  owner: {type: Schema.Types.ObjectId, ref: 'User'},
  upvotes: Number,
  day: [{
    exercise: [{
      sets: Number,
      reps: Number,
      exercise: {type: Schema.Types.ObjectId, ref: 'Exercise'},
    }]
  }],
  goal: String,
});

workoutSchema.set('timestamps', true);

const Workout = mongoose.model('Workout', workoutSchema);

module.exports = Workout;
