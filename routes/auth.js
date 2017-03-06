const express = require('express');
const router = express.Router();

const User = require('../models/user.js');
const bcrypt = require('bcrypt');

router.get('/signup',(req,res,next)=>{
  res.render('auth/signup',{
    errorMessage : ''
  });
});

router.post('/signup',(req,res,next)=>{
  const name = req.body.name;
  const username = req.body.username;
  const password = req.body.password;
  const goal = req.body.goal;

  if (username === '' || password === '') {
    res.render('auth/signup', {
      errorMessage: 'Enter both email and password to sign up.'
    });
    return;
  }

  User.findOne({ username: username }, '_id', (err, existingUser) => {
    if (err) {
      next(err);
      return;
    }

    if (existingUser !== null) {
      res.render('auth/signup', {
        errorMessage: `The username ${username} is already in use.`
      });
      return;
    }

    const salt = bcrypt.genSaltSync(10);
    const hashedPass = bcrypt.hashSync(password, salt);

    const userSubmission = {
      name: name,
      username: username,
      password: hashedPass,
      goal: goal
    };

    const theUser = new User(userSubmission);

    theUser.save((err) => {
      if (err) {
        res.render('auth/signup', {
          errorMessage: 'Something went wrong. Try again later.'
        });
        return;
      }

      res.redirect('/');
    });
  });
});

//Show login form
router.get('/login', (req,res,next)=>{

  res.render('auth/login.ejs',{
    errorMessage: req.flash('error')//req.flash returns array
  });

});

router.get('/logout',(req,res,next)=>{

    req.logout();//passport method (logout no matter type method of login it was)
    req.flash('success', 'You have successfully logged out');
    res.redirect('/');
});

//login post
const passport = require('passport');
router.post("/login",
  passport.authenticate("local", {
  successReturnToOrRedirect: "/",
  failureRedirect: "/login",
  failureFlash: true,
  successFlash: 'You successfully logged in',
  passReqToCallback: true
}));

module.exports = router;
