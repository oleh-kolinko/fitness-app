const express = require('express');
const router = express.Router();
const Exercise = require('../models/exercise');

router.get('/exercises',(req,res,next)=>{
  Exercise.find((err,result)=>{
    if(err) return next(err);

    res.render('exercises/index',{
      exercises: result
    });
  });
});

router.get('/exercises/:name',(req,res,next)=>{
  const name = req.params.name;

  Exercise.findOne({name: name},(err,result)=>{
    if(err) return next(err);

    res.render('exercises/show',{
      exercise: result
    });
  });

});

module.exports = router;
