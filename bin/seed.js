const mongoose = require('mongoose');//get mongoose
mongoose.connect(MONGODB_URI);//connect to DB

const Exercise = require('../models/exercise');//get product model from /models/product.js

const exercises = [
  {
    name: 'Bench press',
    video: '',
    muscle: '',
    description: '',
  },

];

Product.create(products, (err, docs) => {
  if(err) throw err;

  docs.forEach((oneDoc)=>{
    console.log(`${oneDoc.name} ${oneDoc._id}`);
  });

  mongoose.disconnect();
});
