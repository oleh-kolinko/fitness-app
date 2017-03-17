const express = require('express');
const router = express.Router();
const Workout = require('../models/workout');
const Exercise = require('../models/exercise');
const User = require('../models/user');
const ensure = require('connect-ensure-login');//check if user is logged in?


const week = [ 'Sunday','Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

router.get('/workouts',(req,res,next)=>{
  Workout.find({},{},{sort: {upvotes: -1}},(err,result)=>{
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
    description: req.body.description,
    upvotes: 0,
    plan: [],
  });

  if( !$.isArray(req.body.day) ){
    newWorkout.plan.push({
      day: parseInt(req.body.day),
      reps: req.body.reps,
      exercise: req.body.exercise,
    });
  }else{

    for(let i = 0; i< req.body.day.length; i++){

      newWorkout.plan.push({
        day: parseInt(req.body.day[i]),
        reps: req.body.reps[i],
        exercise: req.body.exercise[i],
      });
    }
  }


  newWorkout.save((err,result)=>{

    console.log(result);
    res.redirect('/');
  });
});

router.get('/workouts/:id',ensure.ensureLoggedIn(),(req,res,next)=>{
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
        if(err) return next(err);

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

router.get('/workouts/:id/like',ensure.ensureLoggedIn(),(req,res,next)=>{
  const id = req.params.id;
  const userId = req.user._id;
  User.findOne({_id: userId},{favorites:true},(err,resultUser)=>{
    if(err) return next(err);
    const includes = resultUser.favorites.includes(id);

    if(includes){//TRUE -> ALREADY IN FAVs
      Workout.findById(id, (err,resultWorkout)=>{
        if(err) return next(err);

        //remove from favorites
        var index = resultUser.favorites.indexOf(id);
          if (index > -1) {
              resultUser.favorites.splice(index, 1);
          }
          //decrese upvotes
        resultWorkout.upvotes -- ;

        //Find owner and decrese his upvotes
        User.findById(resultWorkout.owner, (err, resultOwner)=>{
          if(err) return next(err);
          resultOwner.upvotes --;
          resultOwner.save(err=>{

            resultUser.save((err)=>{
              resultWorkout.save((save)=>{
                res.redirect('/workouts/'+id);
              });
            });
          });
        });

      });
    }else{//FALSE -> LIKE
      Workout.findById(id, (err,resultWorkout)=>{
        if(err) return next(err);
        //add to favorites and add upvote
        resultUser.favorites.push(id);
        resultWorkout.upvotes ++ ;

        //Find owner and increse his upvotes
        User.findById(resultWorkout.owner, (err, resultOwner)=>{
          if(err) return next(err);
          resultOwner.upvotes ++;
          resultOwner.save(err=>{

            resultUser.save((err)=>{
              resultWorkout.save((save)=>{
                res.redirect('/workouts/'+id);

              });
            });
          });
        });
      });
    }
  });
});


router.get('/workouts/:id/delete',ensure.ensureLoggedIn(),(req,res,next)=>{
  const id = req.params.id;

  Workout.findByIdAndRemove(id,(err,result)=>{
    if(err) return next(err);
    res.redirect(`/users/${req.user._id}`);
  });
});

module.exports = router;
