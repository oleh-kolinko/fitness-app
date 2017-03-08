const express      = require('express');
const path         = require('path');
const favicon      = require('serve-favicon');
const logger       = require('morgan');
const cookieParser = require('cookie-parser');
const bodyParser   = require('body-parser');
const layouts      = require('express-ejs-layouts');

//User model and encryption
const bcrypt = require('bcrypt');
const User = require('./models/user.js');

//Require enviromental variables
const dotenv = require('dotenv');
dotenv.config();

//Connect to DB
const mongoose     = require('mongoose');
mongoose.connect(process.env.MONGODB_URI);

//sessions
const session = require('express-session');
const flash = require('connect-flash');

//passport
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;

const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// default value for title local
app.locals.title = 'Express - Generated with IronGenerator';

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(layouts);


//FOR sessions:
app.use(session({
  secret: 'fitness-app',
  resave: true,
  saveUninitialized: true,
}));
app.use(flash());

//passport setup
app.use(passport.initialize());
app.use(passport.session());
passport.use( new LocalStrategy(
  //Username field -> name field in form
    //{ usernameField: 'email' },
    (username,password,next)=>{
    User.findOne({ username: username }, (err, user) => {
    if (err) {
      return next(err);
    }
    if (!user) {
      return next(null, false, { message: "Incorrect username" });
    }
    if (!bcrypt.compareSync(password, user.password)) {
      return next(null, false, { message: "Incorrect password" });
    }

    return next(null, user);
  });
}));
passport.serializeUser((user, cb)=>{
  cb(null, user._id);
});
passport.deserializeUser((id, cb) => {
  // if(id.provider){
  //   cb(null,id);
  // }else{
    User.findOne({ "_id": id }, (err, user) => {
      if (err) { return cb(err); }
      cb(null, user);
    });
  // }
});

//-----------------------ROUTES----------------------

app.use('/',(req,res,next)=>{
  res.locals.user = req.user;
  next();
});

const index = require('./routes/index');
app.use('/', index);
const auth = require('./routes/auth');
app.use('/', auth);
const users = require('./routes/users');
app.use('/', users);
const workouts = require('./routes/workouts');
app.use('/', workouts);
const exercises = require('./routes/exercises');
app.use('/', exercises);


// catch 404 and forward to error handler
app.use((req, res, next) => {
  const err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use((err, req, res, next) => {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
