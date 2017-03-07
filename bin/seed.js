const mongoose = require('mongoose');//get mongoose
mongoose.connect('mongodb://localhost/fitness-app');//connect to DB

const Exercise = require('../models/exercise');//get product model from /models/product.js
const Workout = require('../models/workout');//get product model from /models/product.js

const exercises = [
  {
    name: 'Bench press',
    // video: '',
    muscle: 'chest',
    description: 'blabla1',
  },
  {
    name: 'Squat',
    // video: '',
    muscle: 'legs',
    description: 'bla2',
  },
  {
    name: 'Shoulder press',
    // video: '',
    muscle: 'shoulders',
    description: 'blabla3',
  },
];

const workouts = [
  {
    name: 'Beast',
    owner: '58bdac10d7d0a241068ba745',
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
    owner: '58bdac10d7d0a241068ba745',
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
  {
    name: 'Shark',
    owner: '58bd7402d661823548ea3c9e',
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


Exercise.create(exercises, (err, docs) => {
  if(err) throw err;

  docs.forEach((oneDoc)=>{
    console.log(`${oneDoc.name} ${oneDoc._id}`);
  });

  mongoose.disconnect();
});

// Workout.create(workouts, (err, docs) => {
//   if(err) throw err;
//
//   docs.forEach((oneDoc)=>{
//     console.log(`${oneDoc.name} ${oneDoc._id}`);
//   });
//
//   mongoose.disconnect();
// });
