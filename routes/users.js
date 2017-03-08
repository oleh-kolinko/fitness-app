const express = require('express');
const router = express.Router();
const User = require('../models/user');
const Workout = require('../models/workout');
const ensure = require('connect-ensure-login');

const week = ['Sunday','Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

//Show all users:
router.get('/users',(req,res,next)=>{
  User.find({},{},{sort: {upvotes: -1}},(err,result)=>{
    if(err) return next(err);

    res.render('users/index',{
      users: result
    });
  });
});

//Show one user
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

      Workout.find({_id:{ $in:resultUser.favorites }}, (err,resultFavorites)=>{
        if(err) return(next);

        if(resultUser.currentWO){

          let  today = new Date();
          today = today.getDay() ;//Get current day of the week

          Workout.findById(resultUser.currentWO, (err,resultCurrentWO)=>{
            res.render('users/show',{
              user: resultUser,
              myProfile: myProfile,
              workouts: resultWorkout,
              favorites: resultFavorites,
              currentWO: resultCurrentWO,
              currentDay: today,
              week: week
            });
          });
        }else {

          res.render('users/show',{
            user: resultUser,
            myProfile: myProfile,
            workouts: resultWorkout,
            favorites: resultFavorites,
            currentWO: ''
          });
        }


      });
    });

  });

});

router.get('/follow/:id',ensure.ensureLoggedIn(), (req,res,next)=>{
  const id = req.params.id;

  User.findById(req.user._id,(err, resultUser)=>{
    if(err) return next(err);

      resultUser.currentWO = id;
      resultUser.save(err=>{
        if(err) return next(err);
        res.redirect('/users/'+req.user._id);
      });
  });
});

module.exports = router;
