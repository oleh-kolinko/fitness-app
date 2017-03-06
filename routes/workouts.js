const express = require('express');
const router = express.Router();
const Workout = require('../models/workout');
const Exercise = require('../models/exercise');

const week = ['Monday', 'Tuesday', 'Thursday', 'Wednesday', 'Friday', 'Saturday', 'Sunday'];

router.get('/workouts',(req,res,next)=>{
  Workout.find((err,result)=>{
    if(err) return next(err);

    res.render('workouts/index',{
      workouts: result
    });
  });
});

router.get('/workouts/:id',(req,res,next)=>{
  const workoutId = req.params.id;
  const exercisesNames = [];
  Workout.findById(workoutId,(err,resultWorkout)=>{
    if(err) return next(err);

    resultWorkout._doc.plan.forEach( exercise =>{
      exercisesNames.push(exercise._doc.exercise);
    });

    Exercise.find({
      name: { $in: exercisesNames}
      },(err,resultExercise)=>{
      if(err) return next(err);


      res.render('workouts/show',{
        week: week,
        workout: resultWorkout,
        exercises: resultExercise
      });
    });



  });


});

module.exports = router;
