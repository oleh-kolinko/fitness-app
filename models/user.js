const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
  name: String,
  username: { type: String, required: true },
  password: { type: String, required: true },
  goal: String,
  img: String,
  upvotes: Number,
  favorites: [String]//[{type: Schema.Types.ObjectId, ref: 'Workout'}],
});

userSchema.set('timestamps', true);

const User = mongoose.model('User', userSchema);

module.exports = User;
