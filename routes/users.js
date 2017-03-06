const express = require('express');
const router = express.Router();
const User = require('../models/user');
const Workout = require('../models/workout');

router.get('/users',(req,res,next)=>{
  User.find((err,result)=>{
    if(err) return next(err);

    res.render('users/index',{
      users: result
    });
  });
});

router.get('/users/:id',(req,res,next)=>{
  const id = req.params.id;

  User.findById(id,(err,resultUser)=>{
    if(err) return next(err);

    Workout.find(
      {  owner: id  },
      (err,resultWorkout)=>{
      if(err) return next(err);

      res.render('users/show',{
        user: resultUser,
        workouts: resultWorkout
      });
    });

  });

});

module.exports = router;
