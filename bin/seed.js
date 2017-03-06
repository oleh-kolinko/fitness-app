const mongoose = require('mongoose');//get mongoose
mongoose.connect('mongodb://localhost/fitness-app');//connect to DB

const Exercise = require('../models/exercise');//get product model from /models/product.js
const Workout = require('../models/workout');//get product model from /models/product.js

const exercises = [
  {
    name: 'Bench press',
    // video: '',
    muscle: 'chest',
    description: '123',
  },
  {
    name: 'Squat',
    // video: '',
    muscle: 'legs',
    description: '123',
  },

];

const workouts = [
  {
    name: 'Beast',
    upvotes: 10,
    plan:[
      {day: 0 , sets: 2, exercise:'Bench press'},
      {day: 1 , sets: 2, exercise:'Bench press'},
      {day: 1 , sets: 2, exercise:'Bench press'},
      {day: 2 , sets: 2, exercise:'Squat'},
      {day: 2 , sets: 2, exercise:'Bench press'},
    ],
    goal: 'gain',
  },
  {
    name: 'Animal',
    upvotes: 10,
    plan:[
      {day: 0 , sets: 2, exercise:'Bench press'},
      {day: 1 , sets: 2, exercise:'Bench press'},
      {day: 2 , sets: 2, exercise:'Bench press'},
      {day: 3 , sets: 2, exercise:'Squat'},
      {day: 4 , sets: 2, exercise:'Bench press'},
      {day: 5 , sets: 2, exercise:'Bench press'},
      {day: 5 , sets: 2, exercise:'Squat'},
      {day: 6 , sets: 2, exercise:'Bench press'},
    ],
    goal: 'lose',
  },
];


// Exercise.create(exercises, (err, docs) => {
//   if(err) throw err;
//
//   docs.forEach((oneDoc)=>{
//     console.log(`${oneDoc.name} ${oneDoc._id}`);
//   });
//
//   mongoose.disconnect();
// });
Workout.create(workouts, (err, docs) => {
  if(err) throw err;

  docs.forEach((oneDoc)=>{
    console.log(`${oneDoc.name} ${oneDoc._id}`);
  });

  mongoose.disconnect();
});
