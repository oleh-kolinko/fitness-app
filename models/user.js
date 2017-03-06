const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
  name: String,
  //email: { type: String, required: true },
  username: { type: String, required: true },
  password: { type: String, required: true },
  goal: String,
  upvotes: Number,
  workouts: [],
  //isTrainer: { type: Boolean, default: false },
  //fee: { type: Number, default: null }
});

userSchema.set('timestamps', true);

const User = mongoose.model('User', userSchema);

module.exports = User;
