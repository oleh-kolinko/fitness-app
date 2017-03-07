const express = require('express');
const router = express.Router();
const Workout = require('../models/workout');
const Exercise = require('../models/exercise');
const User = require('../models/user');
const ensure = require('connect-ensure-login');//check if user is logged in?


const week = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

router.get('/workouts',(req,res,next)=>{
  Workout.find((err,result)=>{
    if(err) return next(err);

    res.render('workouts/index',{
      workouts: result
    });
  });
});


router.get('/workouts/new',ensure.ensureLoggedIn(),(req,res,next)=>{

  Exercise.find((err,result)=>{
    res.render('workouts/new',{
      week:week,
      exercises:result,
    });
  });

});

router.post('/workouts/new',ensure.ensureLoggedIn(),(req,res,next)=>{

  let newWorkout= new Workout({
    name: req.body.name,
    goal: req.body.goal,
    owner: req.user._id,
    upvotes: 0,
    plan: [],
  });

  for(let i = 0; i< req.body.day.length; i++){

    newWorkout.plan.push({
      day: parseInt(req.body.day[i]),
      sets: parseInt(req.body.sets[i]),
      exercise: req.body.exercise[i],
    });
  }


  newWorkout.save((err,result)=>{

    console.log(result);
    res.redirect('/');
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

      User.findById(resultWorkout.owner,(err,resultUser)=>{

        res.render('workouts/show',{
          week: week,
          workout: resultWorkout,
          exercises: resultExercise,
          owner: resultUser
        });

      });
    });
  });
});

module.exports = router;
