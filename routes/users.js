const express = require('express');
const router = express.Router();
const User = require('../models/user');
const Workout = require('../models/workout');
const ensure = require('connect-ensure-login');

router.get('/users',(req,res,next)=>{
  User.find((err,result)=>{
    if(err) return next(err);

    res.render('users/index',{
      users: result
    });
  });
});

router.get('/users/:id',ensure.ensureLoggedIn(),(req,res,next)=>{
  const id = req.params.id;

  User.findById(id,(err,resultUser)=>{
    if(err) return next(err);

    Workout.find(
      {  owner: id  },
      (err,resultWorkout)=>{
      if(err) return next(err);

      let myProfile = false;
      if(id == req.user._id){
        myProfile = true;
      }

      res.render('users/show',{
        user: resultUser,
        myProfile: myProfile,
        workouts: resultWorkout
      });
    });

  });

});

module.exports = router;
