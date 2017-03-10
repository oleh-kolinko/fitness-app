const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
  name: String,
  username: { type: String, required: true },
  password: { type: String, required: true },
  goal: String,
  img: String,
  link: String,
  upvotes: {type: Number, default: 0},
  favorites: [String],//[{type: Schema.Types.ObjectId, ref: 'Workout'}],
  currentWO: String,
});

userSchema.set('timestamps', true);

const User = mongoose.model('User', userSchema);

module.exports = User;
