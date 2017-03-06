const express = require('express');
const router = express.Router();
const Workout = require('../models/workout');

router.get('/workouts',(req,res,next)=>{
  Workout.find((err,result)=>{
    if(err) return next(err);

    res.render('workouts/index',{
      workouts: result
    });
  });
});

router.get('/workouts/:id',(req,res,next)=>{
  const id = req.params.id;

  Workout.findById(id,(err,result)=>{
    if(err) return next(err);

    res.render('workouts/show',{
      workout: result
    });
  });

});

module.exports = router;
