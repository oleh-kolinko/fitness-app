const express = require('express');
const router  = express.Router();

/* GET home page. */
router.get('/', (req, res, next) => {
  if(req.user){
    res.redirect(`users/${req.user._id}`);
  }else{
    res.render('index',{
      user: req.user
    });

  }
});

module.exports = router;
